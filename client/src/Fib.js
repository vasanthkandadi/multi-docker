import axios from 'axios';
import { useEffect, useState } from 'react';

function Fib() {
    const [seenIndexes, setSeenIndexes] = useState([]);
    const [values, setValues] = useState({});
    const [index, setIndex] = useState('');

    useEffect(() => {
        fetchValues();
        fetchIndexes();
    }, []);

    async function fetchValues() {
        const response = await axios.get('/api/values/current');
        setValues(response.data);
    }

    async function fetchIndexes() {
        const response = await axios.get('/api/values/all');
        setSeenIndexes(response.data);
    }

    async function handleSubmit(event) {
        event.preventDefault();

        await axios.post('/api/values', { index });
        setIndex('');
    }

    function renderSeenIndexes() {
      return seenIndexes.map(({ number }) => {
          if (Array.isArray(number)) {
              return number.join(', ');
          } else {
              return ''; // Handle non-array case gracefully, e.g., return an empty string
          }
      });
  }
  

    function renderValues() {
        return Object.entries(values).map(([key, value]) => (
            <div key={key}>
                For index {key} I Calculated {value}
            </div>
        ));
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Enter your index:</label>
                <input
                    value={index}
                    onChange={event => setIndex(event.target.value)}
                />
                <button>Submit!</button>
            </form>

            <h3>Indexes I have seen:</h3>
            {renderSeenIndexes()}

            <h3>Calculated Values:</h3>
            {renderValues()}
        </div>
    );
}

export default Fib;
