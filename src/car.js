 import React, {useState} from 'react';
 
 const CAR_LIST = [
    {
      id: 1,
      make: "Mitsubishi",
      model: "Lancer",
      type: "Used"
    },
    { id: 2, make: "Honda", model: "Vezel", type: "New" },
    { id: 3, make: "Honda", model: "Civic", type: "Used" },
    { id: 4, make: "Audi", model: "A3", type: "New" },
    { id: 5, make: "Audi", model: "A4", type: "Used" },
    { id: 6, make: "Audi", model: "A7", type: "New" },
    { id: 7, make: "BMW", model: "i8", type: "Used" }
  ];
  
  const PRICE_LIST = [
    { car_id: 1, price: 1000 },
    { car_id: 2, price: 2000 },
    { car_id: 3, price: 3000 },
    { car_id: 4, price: 4000 },
    { car_id: 5, price: 5000 },
    { car_id: 6, price: 6000 },
    { car_id: 7, price: 7000 }
  ];

  const CarList = ()=>{
    const [searchTerm,setSearchTerm]=useState('');
    const handleSearch = (e) =>{
        setSearchTerm(e.target.value)
    };
    const filteredCars = CAR_LIST.filter((car) =>{
        const searchString = car.make.toLowerCase() + ' ' +car.model.toLowerCase()  ;
        return searchString.includes(searchTerm.toLowerCase());
    });

    return (
        <div>
            <input 
            type="text"
            placeholder='search by make,model'
            value={handleSearch}
            />
            <ul>
                {filteredCars.map((car) => (
                    <li key={car.id}>
                        {car.make} {car.model} -{car.type} - $
                        {PRICE_LIST.find((price) => price.car_id === car.id)?.price}                    </li>
                ))}
            </ul>
        </div>
    );
  };

export default CarList;