const students = [
  { name: "Alice", score: 42 },
  { name: "Bob", score: 55 },
  { name: "Charlie", score: 68 },
  { name: "David", score: 48 },
  { name: "Eve", score: 91 },
];

// เริ่มเขียนโค้ดตรงนี้
/**แยกคนที่คะแนนมากกว่า 50 ออกมา
 * เอาไปเพิ่มคะแนน 10%
 * เอาที่เพิ่มคะแนนแล้วมาบวกกัน
 */

const sumUpScore = students
  .filter((eachStudent) => {
    return eachStudent.score > 50;
  })
  .map((eachStudent) => {
    return (eachStudent.score += eachStudent.score * 0.1);
  })
  .reduce((total, current) => {
    return total + current;
  });
console.log(sumUpScore);
