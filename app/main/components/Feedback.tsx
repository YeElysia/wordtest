import React from "react";

// 定义类型
type QuestionStatus = {
  id: number; // 问题的唯一标识符
  status: "wrong" | "correct" | "notAttempted"; // 状态的值
};

interface FeedbackProps {
  questionStatus?: QuestionStatus[]; // 可选的题目状态，默认值为 []
}

const Feedback: React.FC<FeedbackProps> = ({ questionStatus = [] }) => {
  return (
    <div className="feedback">
      <h1 className="feedback-title">Feedback</h1>

      <div className="feedback-status">
        {questionStatus.map((question) => (
          <div
            key={question.id}
            className={`status-box ${question.status}`} // 动态添加类名
          >
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
