import './style.css';
import { useState } from 'react';
import update from 'immutability-helper';
import Accrodion from '../../Elements/Accordion';

export default function Filter() {
  const [accrodion, setAccrodion] = useState({
    technologies: true,
    level: true,
    type: true,
    city: true
  });

  const handleAccrodion = name => {
    switch (name) {
      case 'technologies':
        return setAccrodion(
          update(accrodion, { technologies: { $set: !accrodion.technologies } })
        );
      case 'level':
        return setAccrodion(
          update(accrodion, { level: { $set: !accrodion.level } })
        );
      case 'type':
        return setAccrodion(
          update(accrodion, { type: { $set: !accrodion.type } })
        );
      case 'city':
        return setAccrodion(
          update(accrodion, { city: { $set: !accrodion.city } })
        );
      default:
        return name;
    }
  };

  return (
    <section className="filter">
      <Accrodion>
        <Accrodion.Group>
          <Accrodion.Title
            open={accrodion.technologies}
            click={() => handleAccrodion('technologies')}
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
              />
            </svg>
            <p>Technologies</p>
          </Accrodion.Title>
          <Accrodion.Content open={accrodion.technologies}>
            Content
          </Accrodion.Content>
        </Accrodion.Group>

        <Accrodion.Group>
          <Accrodion.Title
            open={accrodion.level}
            click={() => handleAccrodion('level')}
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
              />
            </svg>
            <p>Experience level</p>
          </Accrodion.Title>
          <Accrodion.Content open={accrodion.level}>Content</Accrodion.Content>
        </Accrodion.Group>

        <Accrodion.Group>
          <Accrodion.Title
            open={accrodion.type}
            click={() => handleAccrodion('type')}
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
              />
            </svg>
            <p>Type of cooperation</p>
          </Accrodion.Title>
          <Accrodion.Content open={accrodion.type}>Content</Accrodion.Content>
        </Accrodion.Group>

        <Accrodion.Group>
          <Accrodion.Title
            open={accrodion.city}
            click={() => handleAccrodion('city')}
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <p>City</p>
          </Accrodion.Title>
          <Accrodion.Content open={accrodion.city}>Content</Accrodion.Content>
        </Accrodion.Group>
      </Accrodion>
    </section>
  );
}