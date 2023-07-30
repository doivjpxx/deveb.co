import React from "react";
import "./textbox.scss";

const Coverimage = ({ width, height, double, h2, align, mt, img, pb, end }) => {
    
  const devideImsTo2Array = () => {
    const arr1 = [];
    const arr2 = [];

    img.forEach((element) => {
      if (arr1.length < arr2.length) arr1.push(element);
      else arr2.push(element);
    });

    return [arr1, arr2];
  };

  return (
    <>
      {double === false ? (
        <div
          className={`cover-contain ${width} ${pb ? pb : ""}`}
          style={mt ? { marginTop: "-38px" } : {}}
        >
          <div
            className={`cover ${height} ${end ? " end" : ""}`}
            style={
              img ? { background: `url(${img})`, backgroundSize: "cover" } : {}
            }
          ></div>
        </div>
      ) : img.length > 2 ? (
        <div className={`double-contain more-than-two ${align} ${end ? " end" : ""}`}>
          <h2>{h2}</h2>

          <div className="flex-contain">
            {devideImsTo2Array().map((imgArr) => (
              <div key={imgArr[0]} className={`cover-contain half-w`}>
                {
                    imgArr.map( src => 
                        <div
                          className="cover small-h"
                          key={src}
                          style={{
                            background: `url(${src})`,
                            backgroundSize: "cover",
                          }}
                        ></div>
                    )
                }
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className={`double-contain ${align} ${end ? " end" : ""}`}>
          <h2>{h2}</h2>
          <div className="flex-contain">
            {img.map((src) => (
              <div key={src} className={`cover-contain half-w`}>
                <div
                  className="cover small-h"
                  style={{ background: `url(${src})`, backgroundSize: "cover" }}
                ></div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};
export default Coverimage;
