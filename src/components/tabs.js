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

  const topicDiv = document.createElement('div');
  const tabDivOne = document.createElement('div');
  const tabDivTwo = document.createElement('div');
  const tabDivThree = document.createElement('div');

  topicDiv.classList.add('topics');
  tabDivOne.classList.add('tab');
  tabDivTwo.classList.add('tab');
  tabDivThree.classList.add('tab');

  topicDiv.appendChild(tabDivOne);
  topicDiv.appendChild(tabDivTwo);
  topicDiv.appendChild(tabDivThree);

  tabDivOne.textContent = topics[0];
  tabDivTwo.textContent = topics[1];
  tabDivThree.textContent = topics[2];

  return topicDiv;
}

const tabsAppender = (selector) => {
  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `http://localhost:5000/api/topics` (test it in Postman/HTTPie!).
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //
  axios.get('http://localhost:5000/api/topics')
    .then(response => {
      console.log(response);
      const topicsArray = response.data.topics;
      const tabEntryPoint = document.querySelector(selector);
      tabEntryPoint.appendChild(Tabs(topicsArray));

    })
    .catch(error => {
      console.log(error);
    })

}

export { Tabs, tabsAppender }
