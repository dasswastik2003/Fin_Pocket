"use client";
import "@/styles/styles.css";
export default function WorkflowSection() {
  const steps = [
    {
      icon: "/images/workflow/signup.svg",
      title: "Sign Up",
      description: "Create your account in minutes.",
    },
    {
      icon: "/images/workflow/album.svg",
      title: "Link Accounts",
      description: "Securely connect your financial accounts.",
    },
    {
      icon: "/images/workflow/analyze.svg",
      title: "Analyze",
      description: "Access detailed insights and analytics.",
    },
    {
      icon: "/images/workflow/transact.svg",
      title: "Transact",
      description: "Send or receive payments effortlessly.",
    },
    {
      icon: "/images/workflow/optimize.svg",
      title: "Optimize",
      description: "Use our tools to improve financial decisions.",
    },
  ];

  return (
    <section className="workflow">
      <div className="container">
        <div className="workflow-wrapper">
          <div className="row">
            <div className="col col-5 col-lg-12">
              <div className="workflow-content">
                <div className="section-content">
                  <p className="section-badge">Workflow</p>
                  <h2 className="sec-heading">A smarter way to manage your money</h2>
                  <p style={{color:"black"}}>Our ultimate solution for seamless and intelligent money management.</p>
                </div>
                <div className="savings-content">
                  <h3>Automated Savings</h3>
                  <p style={{color:"black"}}>
                    Effortlessly save money with our automated savings feature. Set your goals, and
                    Smart cash will so the rest, helping you achieve financial milestones without
                    even thinking about it
                  </p>
                </div>
                <div className="expences-content">
                  <h3>Track your expenses</h3>
                  <p style={{color:"black"}}>
                    Stay on top of your spending with a simple and intuitive tracking system. Add,
                    edit, and monitor expenses in seconds, helping you understand where your money
                    goes and make smarter financial decisions every day.
                  </p>
                </div>
              </div>
            </div>
            <div className="col col-6 col-lg-12">
              <div className="workflow-steps">
                <div className="steps-cards">
                  {steps.map((step, index) => (
                    <div key={index}>
                      <figure>
                        <img src={step.icon} alt={step.title} />
                      </figure>
                      <div>
                        <h3>{step.title}</h3>
                        <p>{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
