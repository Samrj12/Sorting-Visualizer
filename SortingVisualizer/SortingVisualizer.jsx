import React from 'react';
import * as sortingAlgorithms from '../sortingAlgorithms/sortingAlgorithms.js';
import './SortingVisualizer.css';

const ANIMATION_SPEED_MS = 1;

// Change this value for the number of bars (value) in the array.
const NUMBER_OF_ARRAY_BARS = 310;

// This is the main color of the array bars.
const PRIMARY_COLOR = 'turquoise';

// This is the color of array bars that are being compared throughout the animations.
const SECONDARY_COLOR = 'red';

export default class SortingVisualizer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      array: [],
    };
  }

  componentDidMount() {
    this.resetArray();
  }

  resetArray() {
    const array = [];
    for (let i = 0; i < NUMBER_OF_ARRAY_BARS; i++) {
      array.push(randomIntFromInterval(5, 730));
    }
    this.setState({array});
  }
  mergeSort()
 {
    const animations = sortingAlgorithms.mergeSort(this.state.array);
    for(let i=0;i<animations.length;i++)
    {
        const arrayBars = document.getElementsByClassName('array-bar');
        const isColorChange = i % 3 !== 2;
        if(isColorChange)
        {
            const [barOneIdx, barTwoIdx] = animations[i];
            const barOneStyle = arrayBars[barOneIdx].style;
            const barTwoStyle = arrayBars[barTwoIdx].style;
            const color = i % 3 == 0 ? 'red' : 'skyblue';
            setTimeout(() => {
                barOneStyle.backgroundColor = color;
                barTwoStyle.backgroundColor = color;
            }, i * ANIMATION_SPEED_MS);
        } 
        else
        {
            setTimeout(() => {
                const [barOneIdx, newHeight] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                barOneStyle.height = `${newHeight}px`;
            }, i * ANIMATION_SPEED_MS);
        }
    }
 }

 bubbleSort()
 {
      const animations = sortingAlgorithms.bubbleSort(this.state.array);
      for(let i=0;i < animations.length; i++)
      { 
        const arrayBars = document.getElementsByClassName('array-bar');
        const isColorChange = i % 4 < 2;
        if(isColorChange)
        {
            const [barOneIdx, barTwoIdx] = animations[i];
            const barOneStyle = arrayBars[barOneIdx].style;
            const barTwoStyle = arrayBars[barTwoIdx].style;
            const color = i % 4 == 0 ? 'red' : 'skyblue';
            setTimeout(() => {
                barOneStyle.backgroundColor = color;
                barTwoStyle.backgroundColor = color;
            }, i * ANIMATION_SPEED_MS);
        } 
        else
        {
            setTimeout(() => {
                const [barOneIdx, newHeight] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                barOneStyle.height = `${newHeight}px`;
            }, i * ANIMATION_SPEED_MS);
        }
            
      }
 }


  quickSort() {
      const animations = sortingAlgorithms.quickSort(this.state.array);
      for(let i=0;i < animations.length; i++)
      { 
        const arrayBars = document.getElementsByClassName('array-bar');
        const isColorChange = i % 4 < 2;
        if(isColorChange)
        {
            const [barOneIdx, barTwoIdx] = animations[i];
            const barOneStyle = arrayBars[barOneIdx].style;
            const barTwoStyle = arrayBars[barTwoIdx].style;
            const color = i % 4 == 0 ? 'red' : 'skyblue';
            setTimeout(() => {
                barOneStyle.backgroundColor = color;
                barTwoStyle.backgroundColor = color;
            }, i * ANIMATION_SPEED_MS);
        } 
        else
        {
            setTimeout(() => {
                const [barOneIdx, newHeight, isSorted] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                barOneStyle.height = `${newHeight}px`;
            }, i * ANIMATION_SPEED_MS);
        }
            
      }

  }

  insertionSort() {
    // We leave it as an exercise to the viewer of this code to implement this method.
      const animations = sortingAlgorithms.insertionSort(this.state.array);
      for(let i=0;i < animations.length; i++)
      { 
        const arrayBars = document.getElementsByClassName('array-bar');
        console.log((animations[i][2] === 0) + " " + animations[i]);
        const isColorChange = (animations[i][2] === 0);
        if(isColorChange)
        {
            const [barOneIdx, barTwoIdx, trivial] = animations[i];
            const barOneStyle = arrayBars[barOneIdx].style;
            const barTwoStyle = arrayBars[barTwoIdx].style;
            const color = i % 3 == 0 ? 'red' : 'skyblue';
            setTimeout(() => {
                barOneStyle.backgroundColor = color;
                barTwoStyle.backgroundColor = color;
            }, i * ANIMATION_SPEED_MS);
        } 
        else
        {
            setTimeout(() => {
                const [barOneIdx, newHeight, isSorted] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                barOneStyle.height = `${newHeight}px`;
            }, i * ANIMATION_SPEED_MS);
        }
            
      }

  }

  //Test method for Bubble Sort
  testBubbleSort()
  {
      for (let i = 0; i < 100; i++) 
      {
      const array = [];
      const length = randomIntFromInterval(1, 1000);
      for (let i = 0; i < length; i++) {
        array.push(randomIntFromInterval(-1000, 1000));
      }
      const javaScriptSortedArray = array.slice().sort((a, b) => a - b);
      const anim = sortingAlgorithms.bubbleSort(array);
      console.log(arraysAreEqual(javaScriptSortedArray, array));
      }
   }
   //Test method for Quick Sort
   testQuickSort()
  {
      for (let i = 0; i < 100; i++) {
      const array = [];
      const length = randomIntFromInterval(1, 1000);
      for (let i = 0; i < length; i++) {
        array.push(randomIntFromInterval(-1000, 1000));
      }
      const javaScriptSortedArray = array.slice().sort((a, b) => a - b);
      const anim = sortingAlgorithms.quickSort(array);
      console.log(arraysAreEqual(javaScriptSortedArray, array));
      }
  }
  //Test method for insertionSort
  testInsertionSort()
  {
      for (let i = 0; i < 100; i++) {
      const array = [];
      const length = randomIntFromInterval(1, 1000);
      for (let i = 0; i < length; i++) {
        array.push(randomIntFromInterval(-1000, 1000));
      }
      const javaScriptSortedArray = array.slice().sort((a, b) => a - b);
      const anim = sortingAlgorithms.insertionSort(array);
      console.log(arraysAreEqual(javaScriptSortedArray, array));
      }
  }

  render() {
    const {array} = this.state;

    return (
      <div className="array-container">
        {array.map((value, idx) => (
          <div
            className="array-bar"
            key={idx}
            style={{
              backgroundColor: PRIMARY_COLOR,
              height: `${value}px`,
            }}></div>
        ))}
        <button onClick={() => this.resetArray()}>Generate New Array</button>
        <button onClick={() => this.mergeSort()}>Merge Sort</button>
        <button onClick={() => this.quickSort()}>Quick Sort</button>
        <button onClick={() => this.insertionSort()}>Insertion Sort</button>
        <button onClick={() => this.bubbleSort()}>Bubble Sort</button>
        <button onClick={() => this.testInsertionSort()}>
          Test Sorting Algorithms (BROKEN)
        </button>
      </div>
    );
  }
}


// From https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function arraysAreEqual(arrayOne, arrayTwo) {
  if (arrayOne.length !== arrayTwo.length) return false;
  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] !== arrayTwo[i]) {
      return false;
    }
  }
  return true;
}
/*
export default class SortingVisualizer extends React.Component {
 constructor(props)
 {
	  super(props);
	  this.state = {array: [],};
 }
 componentDidMount()
 {
	this.resetArray();
 }

 resetArray()
 {
	  const array = [];
	  for(let i =0;i<200;i++)
	  {
			array.push(randomIntFromInterval(5, 700));
	  }
	  this.setState({array});
 }

 mergeSort()
 {
    const animations = sortingAlgorithms.mergeSort(this.state.array);
    const newAnimations = [];
    for(const animation of animations)
    {
        newAnimations.push(animation.comparison);
        newAnimations.push(animation.comparison);
        newAnimations.push(animation.swap);
    }
    for(let i=0;i<newAnimations.length;i++)
    {
        const arrayBars = document.getElementsByClassName('array-bar');
        const [barOneIdx, barTwoIdx] = newAnimations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const isColorChange = i%3 !== 2;
        if(isColorChange)
        {
            const color = i%3 == 0 ? 'red' : 'lightblue';
            setTimeout(() => {
                barOneStyle.backgroundColor = color;
                barTwoStyle.backgroundColor = color;
            }, i * 10);
           } 
        else
        {
            setTimeout(() => {
                const [barOneIdx, newHeight] = newAnimations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                barOneStyle.height = '${newHeight}px';
            }, i * 10);
        }
    }
 }

 bubbleSort()
 {

 }

 quickSort()
 {

 }
  render() {
    const {array} = this.state;

    return (
      <div className="array-container">
        {array.map((value, idx) => (
          <div
            className="array-bar"
            key={idx}
            style={{
              height: `${value}px`
            }}></div>
        ))}
        <button onClick={() => this.resetArray()}>Generate Random Array</button>
        <button onClick={() => this.mergeSort()}>Merge Sort</button>
        <button onClick={() => this.bubbleSort()}>Bubble Sort</button>
        <button onClick={() => this.quickSort()}>Quick Sort</button>
      </div>
    );
  }
}

function randomIntFromInterval(min, max)
{
	return Math.floor(Math.random() * (max - min + 1) + min);
}
function arraysAreEqual(arrayOne, arrayTwo)
{
    if(arrayOne.length !== arrayTwo.length) return false;
    for(let i=0;i<arrayOne.length;i++)
    {
        if(arrayOne[i]!== arrayTwo[i])
        return false;
    }
    return true;
}*/