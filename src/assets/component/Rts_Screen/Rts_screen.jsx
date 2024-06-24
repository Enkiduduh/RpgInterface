import React, { useState, useRef, useEffect } from "react";
import soldier from "../../images/rts/soldier_idle.png";
function App() {
  const [selected, setSelected] = useState([]);
  const [selectionBox, setSelectionBox] = useState(null);
  const [destinations, setDestinations] = useState({});
  const [isMoving, setIsMoving] = useState(false);
  const [divs, setDivs] = useState([
    { id: 1, x: 50, y: 50, isMoving: false },
    { id: 2, x: 150, y: 150, isMoving: false },
    { id: 3, x: 250, y: 250, isMoving: false },
    { id: 4, x: 350, y: 350, isMoving: false },
    { id: 5, x: 450, y: 450, isMoving: false },
    { id: 6, x: 100, y: 200, isMoving: false },
    { id: 7, x: 50, y: 250, isMoving: false },
    { id: 8, x: 250, y: 450, isMoving: false },
  ]);
  const containerRef = useRef(null);

  const getMousePosition = (e) => {
    const containerRect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - containerRect.left;
    const y = e.clientY - containerRect.top;
    return { x, y };
  };

  const handleMouseDown = (e) => {
    if (e.button !== 0) return; // Ignore non-left clicks
    const { x, y } = getMousePosition(e);
    setSelectionBox({ startX: x, startY: y, endX: x, endY: y });
  };

  const handleMouseMove = (e) => {
    if (!selectionBox) return;
    const { x, y } = getMousePosition(e);
    setSelectionBox({ ...selectionBox, endX: x, endY: y });
  };

  const handleMouseUp = (e) => {
    if (!selectionBox || e.button !== 0) return; // Ignore non-left clicks
    const { startX, startY, endX, endY } = selectionBox;
    const newSelected = divs
      .filter((div) => {
        const divX = div.x + 25; // Centre du div
        const divY = div.y + 25; // Centre du div
        return (
          divX >= Math.min(startX, endX) &&
          divX <= Math.max(startX, endX) &&
          divY >= Math.min(startY, endY) &&
          divY <= Math.max(startY, endY)
        );
      })
      .map((div) => div.id);
    setSelected(newSelected);
    setSelectionBox(null);
  };

  const handleContextMenu = (e) => {
    e.preventDefault();
    const { x, y } = getMousePosition(e);
    setDestinations((prevDestinations) => {
      const newDestinations = { ...prevDestinations };
      selected.forEach((id) => {
        newDestinations[id] = { x, y };
      });
      return newDestinations;
    });
  };

  const checkCollision = (div1, div2) => {
    const size = 50; // Taille des divs
    return (
      div1.x < div2.x + size &&
      div1.x + size > div2.x &&
      div1.y < div2.y + size &&
      div1.y + size > div2.y
    );
  };

  const avoidCollision = (movingDiv, allDivs) => {
    const size = 50; // Taille des divs
    for (let i = 0; i < allDivs.length; i++) {
      const div = allDivs[i];
      if (movingDiv.id !== div.id && checkCollision(movingDiv, div)) {
        const dx = movingDiv.x - div.x;
        const dy = movingDiv.y - div.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const minDist = size;
        if (dist < minDist) {
          const angle = Math.atan2(dy, dx);
          movingDiv.x += Math.cos(angle) * (minDist - dist);
          movingDiv.y += Math.sin(angle) * (minDist - dist);
        }
      }
    }
    return movingDiv;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setDivs((prevDivs) => {
        return prevDivs.map((div) => {
          const dest = destinations[div.id];
          if (!dest) return  { ...div, isMoving: false };

          const dx = dest.x - div.x - 25;
          const dy = dest.y - div.y - 25;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 1) return { ...div, isMoving: false };

          const angle = Math.atan2(dy, dx);
          const speed = Math.min(dist, 2); // vitesse de déplacement
          const newX = div.x + Math.cos(angle) * speed;
          const newY = div.y + Math.sin(angle) * speed;

          const movingDiv = { ...div, x: newX, y: newY , isMoving: true};
          setIsMoving(true);
          return avoidCollision(movingDiv, prevDivs);
        });
      });
    }, 20);

    return () => clearInterval(interval);
  }, [destinations]);

  const handleDivClick = (e, id) => {
    e.stopPropagation();
    setSelected((prevSelected) => {
      if (prevSelected.includes(id)) {
        return prevSelected.filter((selectedId) => selectedId !== id);
      } else {
        return [...prevSelected, id];
      }
    });
  };

  return (
    <div
      className="container"
      ref={containerRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onContextMenu={handleContextMenu}
    >
      {divs.map((div) => (
        <div
          key={div.id}
          className={`obj ${selected.includes(div.id) ? "selected" : ""}`}
          style={{ left: div.x, top: div.y }}
          onClick={(e) => handleDivClick(e, div.id)}
        >
          <div className="lifebar-container">
            <div className="lifebar"></div>
          </div>
          {/* obj.id({div.id}) */}
          {!div.isMoving ? (
            <div className="soldierIdleImg"></div>
          ) : (
            <div className="soldierWalkImg"></div>
          )}
          {/* <img src={soldier} alt="" /> */}
        </div>
      ))}
      {selectionBox && (
        <div
          className="selection-box"
          style={{
            left: Math.min(selectionBox.startX, selectionBox.endX),
            top: Math.min(selectionBox.startY, selectionBox.endY),
            width: Math.abs(selectionBox.startX - selectionBox.endX),
            height: Math.abs(selectionBox.startY - selectionBox.endY),
          }}
        />
      )}
      {Object.values(destinations).map((dest, index) => (
        <div
          key={index}
          className="destination-marker"
          style={{ left: dest.x - 10, top: dest.y - 10 }}
        />
      ))}
      <div className="target-container">
        <div className="target">
          <span>Target</span>
          <div className="target-lifebar-container">
            <div className="target-lifebar"></div>
          </div>
        </div>
      </div>
      <div className="panel-command">
        <div className="command attack"></div>
        <div className="command stop"></div>
        <div className="command regroup"></div>
      </div>
    </div>
  );
}

export default App;
