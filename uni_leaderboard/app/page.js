

// import Image from "next/image";
import styles from "./page.module.css";
import jsonData from "./marks"

const Leaderboard = ({ data }) => {

  // const sortedData = data.sort((a, b) => (b.marks8+b.marks7+b.marks6+b.marks5+b.marks4+b.marks3+b.marks2+b.marks1) - (a.marks8+a.marks7+a.marks6+a.marks5+a.marks4+a.marks3+a.marks2+a.marks1));
const sortedData = [...data].sort((a, b) => {
  const totalA = a.marks8 + a.marks7 + a.marks6 + a.marks5 + a.marks4 + a.marks3 + a.marks2 + a.marks1;
  const totalB = b.marks8 + b.marks7 + b.marks6 + b.marks5 + b.marks4 + b.marks3 + b.marks2 + b.marks1;
  return totalB - totalA; // Descending order
});
  const total1 = 800;
  const total2 = 900;
  const total3 = 1100;
  const total4 = 1100;
  const total5 = 1000;
  const total6 = 1000;
  const total7 = 1000;
  const total8 = 800;

  return (
    <div style={{color:"white"}}>
      <h2>Leaderboard</h2>
      <h2>Based on results of 8 semesters</h2>
      <table>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Obtained Marks</th>
            <th>Total Marks</th>
            <th>Percentage</th>
            <th>Trailing By</th>
          </tr>
        </thead>
        <tbody>
          {(() => {
    const getTotalMarks = (s) =>
      s.marks8 + s.marks7 + s.marks6 + s.marks5 + s.marks4 + s.marks3 + s.marks2 + s.marks1;

    const topMarks = getTotalMarks(sortedData[0]); 

    return sortedData.map((student, index) => {
      const studentTotal = getTotalMarks(student);
      const trailingBy = topMarks - studentTotal;
      const isAnyMarkZero = 
        student.marks8 === 0 || 
        student.marks6 === 0 || 
        student.marks5 === 0 || 
        student.marks4 === 0 || 
        student.marks3 === 0 || 
        student.marks2 === 0 || 
        student.marks1 === 0;
        
      return (

            <tr key={index} style={{color:isAnyMarkZero ? "red" : "white"}}>
              <td>{index+1}</td>
              <td>{student.name}</td>
              <td>{student.marks8+student.marks7+student.marks6+student.marks5+student.marks4+student.marks3+student.marks2+student.marks1}</td>
              <td>{total1+total2+total3+total4+total5+total6+total7+total8}</td>
              <td>{(((student.marks8+student.marks7+student.marks6+student.marks5+student.marks4+student.marks3+student.marks2+student.marks1)/7700)*100).toFixed(2)}</td>
              <td>{index === 0 ? "—" : trailingBy}</td>
              {/* <td>{student.srNo}</td> */}
            </tr>
          )
          });
          })()}
        </tbody>
      </table>
    </div>
  );
};

export default function Home() {

  return (
    <main className={styles.main}>
      <Leaderboard data={jsonData} />
    </main>
  );
}

