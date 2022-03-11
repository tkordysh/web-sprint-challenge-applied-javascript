import axios from "axios";

const Tabs = (topics) => {
  // TASK 3
  // ---------------------
  // Implement this function which takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>
  //

  //instantiating elements 
  const topicsTab = document.createElement("div");
  const javascriptTab = document.createElement("div");
  const bootstrapTab = document.createElement("div");
  const technologyTab = document.createElement("div");

  //setting structure 
  topicsTab.appendChild(javascriptTab);
  topicsTab.appendChild(bootstrapTab);
  topicsTab.appendChild(technologyTab);

  //setting classes
  topicsTab.classList.add("topics");
  javascriptTab.classList.add("tab");
  bootstrapTab.classList.add("tab");
  technologyTab.classList.add("tab");

  //setting text content 
  javascriptTab.textContent = topics[0];
  bootstrapTab.textContent = topics[1];
  technologyTab.textContent = topics[2];

  return topicsTab;

}

const tabsAppender = (selector) => {
  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `http://localhost:5000/api/topics` (test it with a console.log!).
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //

  const entryPoint = document.querySelector(selector);
  axios.get("http://localhost:5000/api/topics")
  .then(res => {
    const newTopics = Tabs(res.data.topics);
    entryPoint.appendChild(newTopics);
  })
  .catch(err => {
    console.error(err);
  })
}


export { Tabs, tabsAppender }

