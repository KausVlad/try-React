import WorkPlace from './WorkPlace';
import WorkForm from './WorkForm';
import { useState } from 'react';

export default function Experience() {
  const initialWorks = [
    {
      id: 1,
      title: 'Frontend Developer',
      description: 'Developing user interfaces for web applications',
      name: 'Devox Software',
      date: `2021 - current`,
      link: 'https://devoxsoftware.com',
      current: true,
    },
    {
      id: 2,
      title: 'Junior Frontend Developer',
      description: 'Developing user interfaces for web applications',
      name: 'Hexa LLC',
      date: `2020 - 2021`,
      link: 'https://hexa.com.ua',
      current: false,
    },
    {
      id: 3,
      title: 'Backend Developer',
      description: 'Developing APIs and server-side applications',
      name: 'Acme Corporation',
      date: `2019 - 2020`,
      link: 'https://acme-corp.com',
      current: false,
    },
  ];

  const [items, setItems] = useState(initialWorks);

  const handleSubmit = (newWork) => {
    setItems([...items, newWork]);
  };

  return (
    <>
      <h2 id="KeyC">Work Experience</h2>
      <div className="experience">
        <WorkPlace items={items} currentDiv={true} />
        <WorkPlace items={items} currentDiv={false} />
      </div>
      <WorkForm handleSubmitComp={handleSubmit} />
    </>
  );
}
