const Feedback = () => {
  //题目状态
  const questionStatus = [
    { id: 1, status: "wrong" }, // 错误
    { id: 2, status: "correct" }, // 正确
    { id: 3, status: "notAttempted" }, // 未作答
  ];

  return (
    <div className="feedback">
      
      <h1 className="feedback-title">Feedback</h1>

      {/* 状态展示 */}
      <div className="feedback-status">
        {questionStatus.map((question) => (
          <div key={question.id} className={`status-box ${question.status}`}>
            {question.status === "wrong" && <span>❌</span>}
            {question.status === "correct" && <span>✅</span>}
            {question.status === "notAttempted" && <span>{question.id}</span>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feedback;
