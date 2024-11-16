'use client';
import { useState } from "react";
const AnswerInput = () => {
    
        const [data, setData] = useState([
            { id: 1, value: "" },
            { id: 2, value: "" },
            { id: 3, value: "" },
        ]);
        
         const handleInputChange = (id: number, event: React.ChangeEvent<HTMLInputElement>) => {
        const newData = data.map(item =>
            item.id === id ? { ...item, value: event.target.value } : item
        );
        setData(newData);
         };

        const handleClick = () => {
                alert(`确定提交`);
            };

            return (
                <div className="container">
                    {/* 标题部分 */}
                    <h1 className="title">Your Answer</h1>
      
                    {/* 动态生成列表 */}
                    {data.map((item, index) => (
                        <div className="row" key={item.id}>
                            {/* 左侧序号 */}
                            <div className="number">{index + 1}.</div>
          
                            {/* 空白中间占位 */}
                            <div className="placeholder">
                                <input
                                    type="text"
                                    id={`input-${item.id}`}
                                    value={item.value}
                                    onChange={(event) => handleInputChange(item.id, event)} />
                       
                            </div>
          
                            {/* 右侧上传按钮 */}
                            <div className="uploadbutton">
                                <button
              
                                    onClick={() => handleClick()}
                                >
                                    Click Me
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            );
        };
    
    


export default AnswerInput;