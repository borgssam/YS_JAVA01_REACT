const animals=[
  '고양이','호랑기','기러기',
]

export function ListTest3(){
  return (
    <ul>
      {/* map함수에 서 만들어지는 요소는 
      반드시 유니크한 키값을 가지고 있어야 함 */}
      {animals.map(
        (animal, index)=>{          
          return <li key={index}> {index}.{animal}  </li>;
        }
      )}
    </ul>
  );
}