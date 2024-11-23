import React from "react";

// 定义类型
type QuestionStatus = {
  status: "wrong" | "correct" | "notAttempted"; // 状态的值
};

interface FeedbackProps {
  questionStatus: QuestionStatus; // 可选的题目状态，默认值为 []
}

const Feedback: React.FC<FeedbackProps> = ({ questionStatus }) => {
  let feedback = questionStatus.status === "wrong" ? "❌" : "✅";
  if (questionStatus.status === "notAttempted") {
    feedback = "";
    }
  return (
    <div className="flex justify-center items-center">
      <div className="feedback-status">
          <div
            className={`status-box ${questionStatus.status}`} // 动态添加类名
          ><span>{feedback}</span>

          </div>
      </div>
    </div>
  );
};

export default Feedback;