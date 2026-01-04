import "./App.css";
import Lister from "./components/Lister";
import Questions from "./components/Questions";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import React from "react";
import Completer from "./components/Completer";
import AddQuestion from "./components/AddQuestion";


function App() {
  const [mode, setmode] = useState("dark");
  const [count, setcount] = useState(0);

  const arrayq = [
    { ID: "1", Q: "Search in a sorted 2D matrix", link: "https://leetcode.com/problems/search-a-2d-matrix/", status: "Incomplete", done: "not" },
    { ID: "2", Q: "Grid Unique Paths", link: "https://leetcode.com/problems/unique-paths/", status: "Incomplete", done: "not" },
    { ID: "3", Q: "Two Sum", link: "https://leetcode.com/problems/two-sum/", status: "Incomplete", done: "not" },
    { ID: "4", Q: "Longest Consecutive Sequence", link: "https://leetcode.com/problems/longest-consecutive-sequence/", status: "Incomplete", done: "not" },
    { ID: "5", Q: "Longest subarray with zero Sum", link: "https://practice.geeksforgeeks.org/problems/largest-subarray-with-0-sum/1", status: "Incomplete", done: "not" },
    { ID: "6", Q: "Longest Substring without Repeating Character", link: "https://leetcode.com/problems/longest-substring-without-repeating-characters/", status: "Incomplete", done: "not" },
    { ID: "7", Q: "Subarrays with given xor K", link: "https://www.interviewbit.com/problems/subarray-with-given-xor/", status: "Incomplete", done: "not" },
    { ID: "8", Q: "Merge Overlapping Sub-intervals", link: "https://leetcode.com/problems/merge-intervals/", status: "Incomplete", done: "not" },
    { ID: "9", Q: "Merge two Sorted Arrays", link: "https://leetcode.com/problems/merge-sorted-array/", status: "Incomplete", done: "not" },
    { ID: "+10", Q: "Pascal’s Triangle", link: "https://leetcode.com/problems/pascals-triangle/", status: "Incomplete", done: "not" },
    { ID: "+11", Q: "Next_permutation", link: "https://leetcode.com/problems/next-permutation/", status: "Incomplete", done: "not" },
    { ID: "+12", Q: "Kadane’s Algorithm", link: "https://leetcode.com/problems/maximum-subarray/", done: "not" },
    { ID: "+13", Q: "Sort an array of 0s, 1s and 2s", link: "https://leetcode.com/problems/sort-colors/", status: "Incomplete", done: "not" },
    { ID: "+14", Q: "Grid Unique Paths", link: "https://leetcode.com/problems/unique-paths/", status: "Incomplete", done: "not" },
    { ID: "+15", Q: "Reverse Pairs", link: "https://leetcode.com/problems/reverse-pairs/", status: "Incomplete", done: "not" },
    { ID: "+16", Q: "Pow(x,n)", link: "https://leetcode.com/problems/powx-n/", status: "Incomplete", done: "not" },
    { ID: "+17", Q: "4 Sum problem", link: "https://leetcode.com/problems/4sum/", status: "Incomplete", done: "not" },
    { ID: "+18", Q: "Max consecutive Ones", link: "https://leetcode.com/problems/max-consecutive-ones/", status: "Incomplete", done: "not" },
    { ID: "+19", Q: "Reverse Words in a String", link: "https://leetcode.com/problems/reverse-words-in-a-string/", status: "Incomplete", done: "not" },
    { ID: "+20", Q: "Longest Palindrome in a string", link: "https://leetcode.com/problems/longest-palindromic-substring/", status: "Incomplete", done: "not" },
    { ID: "+21", Q: "Longest Common Prefix", link: "https://leetcode.com/problems/longest-common-prefix/", status: "Incomplete", done: "not" },
    { ID: "+22", Q: "Minimum characters for Palindrome", link: "https://www.codingninjas.com/codestudio/problems/893000", status: "Incomplete", done: "not" },
    { ID: "+23", Q: "Check for Anagrams", link: "https://leetcode.com/problems/valid-anagram/", status: "Incomplete", done: "not" },
  ];

  const greedyq = [
    { ID: "1", Q: "N meetings in one room", link: "https://practice.geeksforgeeks.org/problems/n-meetings-in-one-room-1587115620/1", status: "Incomplete", done: "not" },
    { ID: "2", Q: "Minimum platforms for railway", link: "https://practice.geeksforgeeks.org/problems/minimum-platforms-1587115620/1#", status: "Incomplete", done: "not" },
    { ID: "3", Q: "Job Sequencing Problem", link: "https://practice.geeksforgeeks.org/problems/job-sequencing-problem-1587115620/1#", status: "Incomplete", done: "not" },
    { ID: "4", Q: "Fractional Knapsack Problem", link: "https://practice.geeksforgeeks.org/problems/fractional-knapsack-1587115620/1", status: "Incomplete", done: "not" },
    { ID: "5", Q: "Find minimum number of coins", link: "https://www.geeksforgeeks.org/find-minimum-number-of-coins-that-make-a-change/", status: "Incomplete", done: "not" },
  ];

  const dpq = [
    { ID: "1", Q: "Maximum Product Subarray", link: "https://leetcode.com/problems/maximum-product-subarray/", status: "Incomplete", done: "not" },
    { ID: "2", Q: "Longest Common Subsequence", link: "https://leetcode.com/problems/longest-increasing-subsequence/", status: "Incomplete", done: "not" },
    { ID: "3", Q: "0/1 Knapsack", link: "https://practice.geeksforgeeks.org/problems/0-1-knapsack-problem0945/1", status: "Incomplete", done: "not" },
    { ID: "4", Q: "Edit Distance", link: "https://leetcode.com/problems/edit-distance/", status: "Incomplete", done: "not" },
    { ID: "5", Q: "Rod Cutting Problem", link: "https://leetcode.com/problems/minimum-cost-to-cut-a-stick/", status: "Incomplete", done: "not" },
    { ID: "6", Q: "Subset sum equal to target", link: "https://leetcode.com/problems/partition-equal-subset-sum/", status: "Incomplete", done: "not" },
    { ID: "7", Q: "Coin Change 2", link: "https://leetcode.com/problems/coin-change/", status: "Incomplete", done: "not" },
    { ID: "8", Q: "Minimum Path Sum", link: "https://leetcode.com/problems/minimum-path-sum/", status: "Incomplete", done: "not" },
    { ID: "9", Q: "Longest Increasing Subsequence", link: "https://leetcode.com/problems/longest-increasing-subsequence/", status: "Incomplete", done: "not" },
    { ID: "+10", Q: "Maximum sum increasing subsequence", link: "https://practice.geeksforgeeks.org/problems/maximum-sum-increasing-subsequence4749/1", status: "Incomplete", done: "not" },
    { ID: "+11", Q: "Matrix Chain Multiplication", link: "https://practice.geeksforgeeks.org/problems/matrix-chain-multiplication0303/1", status: "Incomplete", done: "not" },
    { ID: "+12", Q: "Minimum sum path matrix", link: "https://leetcode.com/problems/minimum-path-sum/", status: "Incomplete", done: "not" },
    { ID: "+13", Q: "Maximum profit in Job scheduling", link: "https://practice.geeksforgeeks.org/problems/job-sequencing-problem-1587115620/1", status: "Incomplete", done: "not" },
  ];

  const Bsq = [
    { ID: "1", Q: "Nth Root of a Number", link: "https://bit.ly/3rj7Ib1", status: "Incomplete", done: "not" },
    { ID: "2", Q: "Search Single Element in sorted array", link: "https://leetcode.com/problems/single-element-in-a-sorted-array/", status: "Incomplete", done: "not" },
    { ID: "3", Q: "Search in Rotated Sorted Array", link: "https://leetcode.com/problems/search-in-rotated-sorted-array/", status: "Incomplete", done: "not" },
    { ID: "4", Q: "Median of Two Sorted Arrays", link: "https://leetcode.com/problems/median-of-two-sorted-arrays/", status: "Incomplete", done: "not" },
    { ID: "5", Q: "K-th Element of two sorted arrays", link: "https://practice.geeksforgeeks.org/problems/k-th-element-of-two-sorted-array1317/1", status: "Incomplete", done: "not" },
    { ID: "6", Q: "Allocate Minimum Number of Pages", link: "https://www.interviewbit.com/problems/allocate-books/", status: "Incomplete", done: "not" },
    { ID: "7", Q: "Aggressive Cows", link: "https://www.spoj.com/problems/AGGRCOW/", status: "Incomplete", done: "not" },
  ];

  const heapq = [
    { ID: "1", Q: "Maximum Sum Combination", link: "https://www.interviewbit.com/problems/maximum-sum-combinations/", status: "Incomplete", done: "not" },
    { ID: "2", Q: "Kth Largest Element", link: "https://leetcode.com/problems/kth-largest-element-in-an-array/", status: "Incomplete", done: "not" },
    { ID: "3", Q: "Top K frequent elements", link: "https://leetcode.com/problems/top-k-frequent-elements/", status: "Incomplete", done: "not" },
    { ID: "4", Q: "Merge K sorted arrays", link: "https://www.codingninjas.com/codestudio/problems/merge-k-sorted-arrays_975379", status: "Incomplete", done: "not" },
    { ID: "5", Q: "Median from Data Stream", link: "https://leetcode.com/problems/find-median-from-data-stream/", status: "Incomplete", done: "not" },
  ];

  const recursionq = [
    { ID: "1", Q: "Subset Sums", link: "https://practice.geeksforgeeks.org/problems/subset-sums2234/1", status: "Incomplete", done: "not" },
    { ID: "2", Q: "Subset II Unique Subsets", link: "https://leetcode.com/problems/subsets-ii/", status: "Incomplete", done: "not" },
    { ID: "3", Q: "Combination Sum 1", link: "https://leetcode.com/problems/combination-sum/", status: "Incomplete", done: "not" },
    { ID: "4", Q: "Combination Sum II", link: "https://leetcode.com/problems/combination-sum-ii/", status: "Incomplete", done: "not" },
    { ID: "5", Q: "Palindrome Partitioning", link: "https://leetcode.com/problems/palindrome-partitioning/", status: "Incomplete", done: "not" },
    { ID: "6", Q: "K-th Permutation Sequence", link: "https://leetcode.com/problems/permutation-sequence/", status: "Incomplete", done: "not" },
  ];

  const llq = [
    { ID: "1", Q: "Check if Linked List is Palindrome", link: "https://leetcode.com/problems/palindrome-linked-list/", status: "Incomplete", done: "not" },
    { ID: "2", Q: "Reverse Linked List in K groups", link: "https://leetcode.com/problems/reverse-nodes-in-k-group/", status: "Incomplete", done: "not" },
    { ID: "3", Q: "Detect a Cycle in Linked List", link: "https://leetcode.com/problems/linked-list-cycle/", status: "Incomplete", done: "not" },
    { ID: "4", Q: "Intersection of Two Linked Lists", link: "https://leetcode.com/problems/intersection-of-two-linked-lists/", status: "Incomplete", done: "not" },
    { ID: "5", Q: "Starting point of loop", link: "https://leetcode.com/problems/linked-list-cycle-ii/", status: "Incomplete", done: "not" },
    { ID: "6", Q: "Flattening a Linked List", link: "https://practice.geeksforgeeks.org/problems/flattening-a-linked-list/1", status: "Incomplete", done: "not" },
    { ID: "7", Q: "Merge two sorted Lists", link: "https://leetcode.com/problems/merge-two-sorted-lists/", status: "Incomplete", done: "not" },
    { ID: "8", Q: "Remove N-th node from end", link: "https://leetcode.com/problems/remove-nth-node-from-end-of-list/", status: "Incomplete", done: "not" },
  ];

  const Btq = [
    { ID: "1", Q: "Level Order Traversal", link: "https://leetcode.com/problems/binary-tree-level-order-traversal/", status: "Incomplete", done: "not" },
    { ID: "2", Q: "Maximum depth of Binary Tree", link: "https://leetcode.com/problems/maximum-depth-of-binary-tree/", status: "Incomplete", done: "not" },
    { ID: "3", Q: "Diameter of Binary Tree", link: "https://leetcode.com/problems/diameter-of-binary-tree/", status: "Incomplete", done: "not" },
    { ID: "4", Q: "Balanced Binary Tree", link: "https://leetcode.com/problems/balanced-binary-tree/", status: "Incomplete", done: "not" },
    { ID: "5", Q: "Lowest Common Ancestor", link: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/", status: "Incomplete", done: "not" },
    { ID: "6", Q: "Identical Trees", link: "https://leetcode.com/problems/same-tree/", status: "Incomplete", done: "not" },
    { ID: "7", Q: "Boundary Traversal", link: "https://leetcode.com/problems/boundary-of-binary-tree/#", status: "Incomplete", done: "not" },
    { ID: "8", Q: "Zig Zag Traversal", link: "https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/", status: "Incomplete", done: "not" },
  ];

  const Bstq = [
    { ID: "1", Q: "Largest BST in Binary Tree", link: "https://leetcode.com/problems/maximum-sum-bst-in-binary-tree/", status: "Incomplete", done: "not" },
    { ID: "2", Q: "Pair with given sum in BST", link: "https://leetcode.com/problems/two-sum-iv-input-is-a-bst/", status: "Incomplete", done: "not" },
    { ID: "3", Q: "Populate Next Right pointers", link: "https://leetcode.com/problems/populating-next-right-pointers-in-each-node/", status: "Incomplete", done: "not" },
    { ID: "4", Q: "Find LCA in BST", link: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/", status: "Incomplete", done: "not" },
    { ID: "5", Q: "Inorder predecessor/successor", link: "https://practice.geeksforgeeks.org/problems/predecessor-and-successor/1", status: "Incomplete", done: "not" },
    { ID: "6", Q: "Kth largest element in BST", link: "https://practice.geeksforgeeks.org/problems/kth-largest-element-in-bst/1", status: "Incomplete", done: "not" },
  ];

  const Sqtq = [
    { ID: "1", Q: "Implement Min Stack", link: "https://leetcode.com/problems/min-stack/", status: "Incomplete", done: "not" },
    { ID: "2", Q: "Sliding Window Maximum", link: "https://leetcode.com/problems/sliding-window-maximum/", status: "Incomplete", done: "not" },
    { ID: "3", Q: "Largest rectangle in Histogram", link: "https://leetcode.com/problems/largest-rectangle-in-histogram/", status: "Incomplete", done: "not" },
    { ID: "4", Q: "Implement LRU Cache", link: "https://leetcode.com/problems/lru-cache/", status: "Incomplete", done: "not" },
    { ID: "5", Q: "Implement Stack using Queue", link: "https://leetcode.com/problems/implement-stack-using-queues/", status: "Incomplete", done: "not" },
    { ID: "6", Q: "Balanced Parentheses", link: "https://leetcode.com/problems/valid-parentheses/", status: "Incomplete", done: "not" },
    { ID: "7", Q: "Next Greater Element", link: "https://leetcode.com/problems/next-greater-element-ii/description/", status: "Incomplete", done: "not" },
  ];

  const Backtrackingq = [
    { ID: "1", Q: "Rat in a Maze", link: "https://practice.geeksforgeeks.org/problems/rat-in-a-maze-problem/1", status: "Incomplete", done: "not" },
    { ID: "2", Q: "M – Coloring Problem", link: "https://practice.geeksforgeeks.org/problems/m-coloring-problem-1587115620/1#", status: "Incomplete", done: "not" },
    { ID: "3", Q: "Sudoku Solver", link: "https://leetcode.com/problems/sudoku-solver/", status: "Incomplete", done: "not" },
    { ID: "4", Q: "N Queen Problem", link: "https://leetcode.com/problems/n-queens/", status: "Incomplete", done: "not" },
    { ID: "5", Q: "Print All Permutations", link: "https://leetcode.com/problems/permutations/", status: "Incomplete", done: "not" },
    { ID: "6", Q: "Word Break (all ways)", link: "https://bit.ly/3FxgW92", status: "Incomplete", done: "not" },
  ];

  const Graphq = [
    { ID: "1", Q: "Cycle in Undirected Graph", link: "https://leetcode.com/problems/course-schedule/", status: "Incomplete", done: "not" },
    { ID: "2", Q: "Topological Sort", link: "https://practice.geeksforgeeks.org/problems/topological-sort/1", status: "Incomplete", done: "not" },
    { ID: "3", Q: "Number of Distinct Islands", link: "https://leetcode.com/problems/number-of-islands/", status: "Incomplete", done: "not" },
    { ID: "4", Q: "Bipartite Graph", link: "https://leetcode.com/problems/is-graph-bipartite/", status: "Incomplete", done: "not" },
    { ID: "5", Q: "Cycle in Directed Graph", link: "https://leetcode.com/problems/course-schedule/", status: "Incomplete", done: "not" },
    { ID: "6", Q: "Print Shortest Path – Dijkstra", link: "https://practice.geeksforgeeks.org/problems/implementing-dijkstra-set-1-adjacency-matrix/1", status: "Incomplete", done: "not" },
  ];

  const [Checked12, setChecked12] = useState([]);
  const [Checked1, setChecked1] = useState([]);
  const [Checked2, setChecked2] = useState([]);
  const [Checked3, setChecked3] = useState([]);
  const [Checked4, setChecked4] = useState([]);
  const [Checked5, setChecked5] = useState([]);
  const [Checked6, setChecked6] = useState([]);
  const [Checked7, setChecked7] = useState([]);
  const [Checked8, setChecked8] = useState([]);
  const [Checked9, setChecked9] = useState([]);
  const [Checked10, setChecked10] = useState([]);
  const [Checked11, setChecked11] = useState([]);

  return (
    <div className={`app-container theme-${mode}`}>
      <Router>
        <Navbar mode={mode} setmode={setmode} />
        <div className="main-content">
          <Routes>
            <Route exact path="/" element={count <= 99 ? <Lister count={count} setcount={setcount} Checked12={Checked12} Checked1={Checked1} Checked2={Checked2} Checked3={Checked3} Checked4={Checked4} Checked5={Checked5} Checked6={Checked6} Checked7={Checked7} Checked8={Checked8} Checked9={Checked9} Checked10={Checked10} Checked11={Checked11} mode={mode} /> : <Completer />} />
            <Route path="/Array and string" element={<Questions Checked={Checked12} no="12" setChecked={setChecked12} mode={mode} qlist={arrayq} name="Array" />} />
            <Route path="/Greedy" element={<Questions Checked={Checked1} no="1" setChecked={setChecked1} mode={mode} qlist={greedyq} name="Greedy" />} />
            <Route path="/Dp" element={<Questions Checked={Checked2} no="2" setChecked={setChecked2} mode={mode} qlist={dpq} name="Dynamic Programming" />} />
            <Route path="/Binary search" element={<Questions Checked={Checked3} no="3" setChecked={setChecked3} mode={mode} qlist={Bsq} name="Binary Search" />} />
            <Route path="/Heaps" element={<Questions Checked={Checked4} no="4" setChecked={setChecked4} mode={mode} qlist={heapq} name="Heaps" />} />
            <Route path="/Recursion" element={<Questions Checked={Checked5} no="5" setChecked={setChecked5} mode={mode} qlist={recursionq} name="Recursion" />} />
            <Route path="/Linked list" element={<Questions Checked={Checked6} no="6" setChecked={setChecked6} mode={mode} qlist={llq} name="Linked List" />} />
            <Route path="/Binary Tree" element={<Questions Checked={Checked7} no="7" setChecked={setChecked7} mode={mode} qlist={Btq} name="Binary Tree" />} />
            <Route path="/Binary Search Tree" element={<Questions Checked={Checked8} no="8" setChecked={setChecked8} mode={mode} qlist={Bstq} name="Binary Search Tree" />} />
            <Route path="/Stack and Queue" element={<Questions Checked={Checked9} no="9" setChecked={setChecked9} mode={mode} qlist={Sqtq} name="Stack and Queue" />} />
            <Route path="/Backtracking" element={<Questions Checked={Checked10} no="10" setChecked={setChecked10} mode={mode} qlist={Backtrackingq} name="Backtracking" />} />
            <Route path="/Graphs" element={<Questions Checked={Checked11} no="11" setChecked={setChecked11} mode={mode} qlist={Graphq} name="Graphs" />} />
            <Route path="/add-question" element={<AddQuestion />} />

          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;