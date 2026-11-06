# Week 1 reflection

Answer each question in 1–3 sentences, in your own words.

1. What is the difference between building a UI imperatively (plain DOM code) and declaratively (React)?
Imperative UI with plain DOM code is more direct, meaning you would have to change the codes yourself to change anything in the UI, and you would have to work out how to sync the data with what is shown on the screen yourself. With React, you can just tell React instead what to change, and what the UI would look like for the current data and it will change the DOM code for you.

2. Why must a component name start with a capital letter?
React will see an element as HTML elements when it sees something that starts with lowercase. For it to see an element as a component, that element needs to start with capital letter.

3. What does a fragment <>...</> do, and why not just use a <div>?
<div> actually adds an extra element to the DOM, which sometimes can break CSS layout. Plus, a fragment can be used to add multiple elements under it just under one root without adding unnecessary elements.

4. Name one benefit of splitting the UI into small components.
It becomes more manageable. You know where everything is, so when you want to change something from a specific component, you can just change the component itself without having to find it in a very long App.jsx file. Plus, having modularity means that if one component is ruined or corrupted for whatever reasons the other components as well as the main class may not be affected.