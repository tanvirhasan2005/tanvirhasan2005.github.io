function downloadCV(e){
  e.preventDefault();
  const cv = `MD TANVIR HASAN\nAI/ML ENGINEER & WEB3 ENTHUSIAST\n\nEmail: tanvirhasan2005@gmail.com\nLocation: Dhaka, Bangladesh\n\nSKILLS\nPython, TensorFlow, PyTorch, Scikit-learn, JavaScript, React, Node.js, Web3.js, Solidity, Smart Contracts, MongoDB, PostgreSQL, Git, Docker, AWS, Linux, DApps, Blockchain, REST API, UI/UX\n\nEXPERIENCE\nAI/ML Engineer — Tech Solutions Ltd. (2023 – Present)\nWeb3 Developer — Blockchain Labs (2022 – 2023)\n\nEDUCATION\nB.Sc. in Computer Science & Engineering (2020 – 2024)\nCGPA: 3.85/4.00\n\nPROJECTS\nAI Chatbot • DeFi Dashboard • NFT Marketplace`;
  const blob = new Blob([cv], {type:"text/plain"});
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url; a.download = "Tanvir-Hasan-CV.txt"; a.click();
  URL.revokeObjectURL(url);
}
function sendMessage(e){
  e.preventDefault();
  const name = e.target.querySelector("input").value;
  const subject = e.target.querySelectorAll("input")[2].value;
  const message = e.target.querySelector("textarea").value;
  location.href = `mailto:tanvirhasan2005@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent("From: "+name+"\n\n"+message)}`;
}
