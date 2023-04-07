import { useState } from 'react';
import Alert from './components/Alert';
import Button from './components/Button';
import ListGroup from './components/ListGroup';
function App() {
  let items = ['Kampala', 'Pretoria', 'Lusaka', 'Egypt', 'Luanda'];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    // <div className='App'>
    //   <ListGroup
    //     items={items}
    //     heading='Cities'
    //     onSelectItem={handleSelectItem}
    //   />
    // </div>

    <div>
      {alertVisible && (
        <Alert
          onClose={() => {
            setAlertVisibility(false);
          }}
        >
          My alert!
        </Alert>
      )}
      <Button
        text='Submit'
        type='danger'
        onClick={() => {
          setAlertVisibility(true);
        }}
      />
    </div>
  );
}

export default App;
