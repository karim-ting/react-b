function ListGroup() {
  let items = ['Kampala', 'Pretoria', 'Lusaka', 'Egypt', 'Luanda'];

  //Event handler
  const handleClick = (event: React.MouseEvent) => console.log(event);

  return (
    <>
      <h1>List</h1>
      {items.length == 0 && <p>No items</p>}
      <ul className='list-group'>
        {items.map((item, index) => (
          <li className='list-group-item' key={item} onClick={handleClick}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
