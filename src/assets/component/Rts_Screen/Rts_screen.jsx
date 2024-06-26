import React, { useState, useRef, useEffect } from "react";

function App() {
  const [selected, setSelected] = useState([]);
  const [selectionBox, setSelectionBox] = useState(null);
  const [destinations, setDestinations] = useState({});
  const [selectedObject, setSelectedObject] = useState(null);
  const [divs, setDivs] = useState([
    {
      id: 1,
      x: 190,
      y: 50,
      isMoving: false,
      isMovingLeft: false,
      type: "SERGENT",
      damage: 10,
      range: 10,
      life: 100,
      portrait: "src/assets/images/rts/sergent_portrait.png",
    },
    {
      id: 2,
      x: 240,
      y: 30,
      isMoving: false,
      isMovingLeft: false,
      type: "MEDIC",
      damage: 3,
      range: 10,
      life: 100,
      portrait: "src/assets/images/rts/medic_portrait.png",
    },
    {
      id: 3,
      x: 350,
      y: 70,
      isMoving: false,
      isMovingLeft: false,
      type: "TROOPER",
      damage: 5,
      range: 10,
      life: 100,
      portrait: "src/assets/images/rts/soldier_portrait.png",
    },
    {
      id: 4,
      x: 250,
      y: 100,
      isMoving: false,
      isMovingLeft: false,
      type: "TROOPER",
      damage: 5,
      range: 10,
      life: 100,
      portrait: "src/assets/images/rts/soldier_portrait.png",
    },
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
          if (!dest) return { ...div, isMoving: false };

          const dx = dest.x - div.x - 25;
          const dy = dest.y - div.y - 25;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 1) return { ...div, isMoving: false };

          const angle = Math.atan2(dy, dx);
          const speed = Math.min(dist, 2); // vitesse de déplacement
          const newX = div.x + Math.cos(angle) * speed;
          const newY = div.y + Math.sin(angle) * speed;
          const isMovingLeft = dx < 0;

          return avoidCollision(
            { ...div, x: newX, y: newY, isMoving: true, isMovingLeft },
            prevDivs
          );
        });
      });
    }, 20);

    return () => clearInterval(interval);
  }, [destinations]);

  const handleDivClick = (e, id) => {
    e.stopPropagation();
    setSelected((prevSelected) => {
      if (prevSelected.includes(id)) {
        const newSelected = prevSelected.filter((selectedId) => selectedId !== id);
        setSelectedObject(newSelected.length === 1 ? divs.find((div) => div.id === newSelected[0]) : null);
        return newSelected;
      } else {
        const newSelected = [...prevSelected, id];
        setSelectedObject(newSelected.length === 1 ? divs.find((div) => div.id === id) : null);
        return newSelected;
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
          {!div.isMoving ? (
            <div className="soldierIdleImg"></div>
          ) : (
            <div
              className={
                div.isMovingLeft ? "soldierWalkImgLeft" : "soldierWalkImgRight"
              }
            ></div>
          )}
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

      {selected.length === 1 && selectedObject && (
        <div className="panel-command">
          <div className="infoUnit">
            <div className="portraitUnit">
              <img src={selectedObject.portrait} alt="Unit portrait" />
            </div>
            <div className="portraitLife">
              <div className="life" style={{ width: `${selectedObject.life}%` }}></div>
              <div className="name">
                {selectedObject.type} {selectedObject.id}
              </div>
            </div>
          </div>

          <div className="commands-container">
            <div className="commands">
              <div className="command move">Move</div>
              <div className="command attack">Attack</div>
              <div className="command stop">Stop</div>
              <div className="command regroup">Regroup</div>
            </div>
            <div className="stats">
              <div className="left">
                <div className="stat health">
                  Health : {selectedObject.life}
                </div>
                <div className="stat attack">
                  Damage : {selectedObject.damage}
                </div>
              </div>
              <div className="right">
                <div className="stat type">
                  Unit Type : {selectedObject.type}
                </div>
                <div className="stat range">
                  Range : {selectedObject.range}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {selected.length > 1 && (
        <div className="panel-command">
          {selected.map((id) => {
            const obj = divs.find((div) => div.id === id);
            return (
              <div key={obj.id} className="infoUnit">
                <div className="portraitUnit">
                  <img src={obj.portrait} alt="Unit portrait" />
                </div>
                <div className="portraitLife">
                  <div className="life" style={{ width: `${obj.life}%` }}></div>
                  <div className="name">
                    {obj.type} {obj.id}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );

}

export default App;
