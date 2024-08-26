const topics = ['HTML', 'CSS', 'Git', 'JavaScript'];
const randomTopic = topics[Math.floor(Math.random() * topics.length)];
/* 
    Hey, teach
    Math.random() returns a number where 0 <= x < 1
    With the algorithm from the example, Math.random() * topics.length has a maximum of 3.96 (0.99*4)
    Since you're using Math.floor(), you'll get 3. You can refresh the browser a hundred times, but
     you will not get 'Javascript' returned in the console. Consider adding +1 and getting rid of the edge case.
*/
function listTopics() {
    for(let x = 0; x < topics.length; x++){
        console.log(topics[x]);
    };
};
function selectTopic() {
    if (randomTopic === 'HTML') {
        console.log("Let's study HTML!");
    }else if(randomTopic === 'CSS'){
        console.log("Let's study CSS!");
    }else if(randomTopic === 'Git'){
        console.log("Let's study Git!");
    }else if(randomTopic === 'Javascript'){
        console.log("Let's study Javascript!");
    }else{
        console.log('Please try again!');
    }
};
console.log('Here are the topics we learned through Prework:');
listTopics();
console.log('Which topic should we study first?');
selectTopic();
// Looping demonstration
// const shapes = ["triangle", "square", "pentagon", "circle"];
// for(let x = 0; x < shapes.length; x++) {
//     console.log(shapes[x]);
// }