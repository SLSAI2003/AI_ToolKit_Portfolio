import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Tool_card from "./components/Tool_card";

function App() {
  return (
    <>
      <div
        className="container-fluid mx-0 sticky-top bg-light bg-opacity-50"
        style={{ backdropFilter: "blur(10px)" }}
      >
        <div className="row border d-flex align-items-center justify-content-between py-4">
          {/* main row */}
          <div className="col inter fs-4 gap-2 text-nowrap d-flex align-items-center">
            <img
              src="./nav_logo.png"
              style={{ width: "55px", height: "45px" }}
            ></img>
            AI Portfolio
          </div>
          {/* main col 1 */}
          <div className="col d-flex gap-2 justify-content-end">
            {/* main col 2 */}
            <div className="btn fs-6"> Home </div>
            <div className="btn fs-6"> Development Tools </div>
            <div className="btn fs-6"> Image Generation Tools </div>
            <div className="btn fs-6"> About </div>
          </div>
        </div>
      </div>

      {/* home section materials */}
      <div className="container mx-auto mt-3">
        <div className="row justify-content-center mx-0">
          <div className="col text-center mt-3">
            <img
              class
              src="/SAI_LOGO.png"
              style={{ height: "150px", width: "150px" }}
            />
          </div>
        </div>
        <div className="row mx-0">
          <div className="col text-center Montserrat mt-4 fs-4 text-info">
            SLS AI Tools Portfolio
          </div>
        </div>
        <div className="row mx-5">
          <div className="col Open Sans text-muted fs-5 mt-3 mx-5 text-center">
            Discover and explore cutting-edge AI tools that are revolutionizing
            different industries. From software development to creative design,
            find the perfect AI assistant for your needs.
          </div>
        </div>
        <div
          className="row d-flex align-items-center gap-3 justify-content-center mt-4 mb-4"
          style={{ fontSize: "13px" }}
        >
          <div className="bg-light small Open Sans col-auto text-dark border rounded px-3 py-1">
            Developement Tools
          </div>
          <div className="bg-light small Open Sans text-dark border rounded col-auto px-3 py-1">
            Image Generation
          </div>
          <div className="bg-light small Open Sans text-dark border rounded col-auto px-3 py-1">
            Guidance
          </div>
        </div>
        <div className="row mx-0 mb-5">
          <div className="col gap-4 d-flex align-items-center justify-content-center mb-5">
            <div
              className="btn btn-dark rounded-4 btn-sm py-2 px-4"
              style={{ cursor: "default" }}
            >
              Explore Tools
            </div>
            <div
              className="btn btn-dark btn-sm rounded-4 py-2 px-4 bg-light text-dark"
              style={{ cursor: "default" }}
            >
              Learn More
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid border">
        <div className="row mt-5">
          <div className="col text-center">
            <img
              src="./Ai_tool.png"
              style={{ width: "120px", height: "100px" }}
            ></img>
          </div>
        </div>
        <div className="row">
          <div className="col text-center Montserrat mt-4 fs-4 text-dark">
            AI Tools for Software Development
          </div>
        </div>
        <div className="row mx-5 ">
          <div className="col Open Sans text-muted fs-6 mt-3 mx-5 mb-5 text-center">
            Enhance your coding workflow with these powerful AI-driven
            development tools that help with code completion, debugging, and
            optimization.
          </div>
        </div>
      </div>

      <div className="container-fluid mx-0">
        <div className="row m-4 gap-4 px-3 mx-0">
          <div className="col-6 me-2 mx-0">
            <Tool_card
              title="ChatGPT"
              tag="Coding Assistant"
              description="ChatGPT is an AI by OpenAI that understands and generates human-like text, helping with coding, writing, learning, and more."
              features={[
                "Contextual understanding",
                "Prompt customization",
                "Code assistance",
                "Creative tasks",
                "Free and Pro versions: Offers flexible usage depending on needs",
              ]}
              footertext="Explore ChatGPT"
              link="https://chat.openai.com"
            />
          </div>
          <div className="col mx-0">
            <Tool_card
              title="Replit AI"
              tag="IDE"
              description="Replit AI is a browser-based development platform that uses AI to help you build, test, and deploy apps faster."
              features={[
                "Replit Agent: Turns natural language into working apps",
                "Replit Assistant: Real-time code explanations & suggestions",
                "Supports Python, JS, React, Streamlit",
                "Advanced modes: Extended Thinking, High Power",
                "Easy deployment: Autoscale, Static Pages, Jobs",
              ]}
              footertext="Explore Replit AI"
              link="https://replit.com/ai"
            />
          </div>
        </div>
      </div>
      <div className="container-fluid border">
        <div className="row mt-5">
          <div className="col text-center">
            <img
              src="./image_ai.png"
              style={{ width: "110px", height: "90px" }}
            ></img>
          </div>
        </div>
        <div className="row">
          <div className="col text-center Montserrat mt-4 fs-4 text-dark">
            AI Tools for Image Generation
          </div>
        </div>
        <div className="row mx-5 ">
          <div className="col Open Sans text-muted fs-6 mt-3 mx-5 mb-5 text-center">
            Create stunning visuals and artwork using these cutting-edge AI
            image generation platforms and tools.
          </div>
        </div>
      </div>
      <div className="container-fluid mx-0">
        <div className="row m-4 gap-4 px-3 mx-0">
          <div className="col-6 me-2 mx-0">
            <Tool_card
              title="Nano Banana"
              tag="AI Image Generator"
              description="Nano Banana is an AI-powered tool developed by Google DeepMind, integrated into platforms like Gemini, Google AI Studio, and Vertex AI."
              features={[
                "Image-to-Video Conversion:",
                "Natural Language Processing",
                "Cross-Platform Accessibility",
                "Integration with Google Services",
              ]}
              footertext="Explore NanoBanano"
              link="https://nanobanana.io"
            />
          </div>
          <div className="col mx-0">
            <Tool_card
              title="MidJourney"
              tag="AI Image Generator"
              description="MidJourney is an AI platform that transforms text prompts into stunning, high-quality images and artwork."
              features={[
                "Generates images from text prompts",
                "Supports multiple styles and themes",
                "High-resolution output for creative projects",
                "Customizable artistic parameters",
                "Community-driven gallery & inspiration",
              ]}
              footertext="Explore MidJourney"
              link="https://www.midjourney.com"
            />
          </div>
        </div>
      </div>
      <div className="container-fluid border dark-gray-row ">
        <div className="row mt-5"></div>
        <div className="row ">
          <div
            className="col text-center Montserrat mt-4 fs-4 text-dark"
            style={{ fontSize: "16px" }}
          >
            About This Portfolio
          </div>
        </div>
        <div className="row mx-5 ">
          <div
            className="col Open Sans text-muted mt-3 mx-5 mb-5 text-center"
            style={{ fontSize: "18px" }}
          >
            This AI tools portfolio showcases some of the most innovative and
            useful artificial intelligence applications across different
            domains. Whether you're a developer looking to boost productivity or
            a creative professional seeking new ways to generate content, these
            tools represent the cutting edge of AI technology.
          </div>
        </div>
        <div
          className="col Open Sans text-muted mt-3 mx-5 mb-5 text-center"
          style={{ fontSize: "14px" }}
        >
          The landscape of AI tools is constantly evolving, with new
          capabilities and improvements being released regularly. This
          collection is curated to highlight tools that have proven their value
          in real-world applications.
        </div>
        <div className="col gap-4 d-flex align-items-center justify-content-center mb-5">
          <div
            className="btn btn-light text-dark border rounded-4 btn-sm py-2 px-4"
            style={{ cursor: "default" }}
          >
            Contact
          </div>
          <div
            className="btn btn-light text-dark border rounded-4 btn-sm py-2 px-4"
            style={{ cursor: "default" }}
          >
            GitHub
          </div>
          <div
            className="btn btn-light text-dark border rounded-4 btn-sm py-2 px-4"
            style={{ cursor: "default" }}
          >
            Linkedin
          </div>
        </div>
      </div>

      <div className="row ">
        <div
          className="col text-center Montserrat mt-4 mb-4 text-dark"
          style={{ fontSize: "12px" }}
        >
          Made by Shubhlabh Shrivastava Using React.js, Bootstrap and AI
        </div>
      </div>
      {/* intro section */}
      {/* development tools section */}
      {/* working bot project section */}
    </>
  );
}

export default App;
