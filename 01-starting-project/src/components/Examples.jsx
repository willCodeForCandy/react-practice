import { EXAMPLES } from '../data';
import Section from './Section';
import TabButton from './TabButton/TabButton';
import { useState } from 'react';
import Tabs from './Tabs';

const Examples = () => {
  const [selectedTopic, setSelectedTopic] = useState();

  const handleSelect = selectedButton => {
    setSelectedTopic(selectedButton);
  };
  return (
    <Section title="Examples" id="examples">
      <Tabs
        // buttonsContainer="menu" (no lo agrego porque lo puse como degault)
        //?si quisiera usar un custom component como wrapper, se pone entre {}
        buttons={
          <>
            <TabButton
              isSelected={selectedTopic === 'components'}
              onClick={() => handleSelect('components')}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={selectedTopic === 'jsx'}
              onClick={() => handleSelect('jsx')}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={selectedTopic === 'props'}
              onClick={() => handleSelect('props')}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={selectedTopic === 'state'}
              onClick={() => handleSelect('state')}
            >
              State
            </TabButton>
          </>
        }
      >
        {!selectedTopic ? (
          <p>Please select a topic</p>
        ) : (
          <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>{EXAMPLES[selectedTopic].code}</code>
            </pre>
          </div>
        )}
      </Tabs>
    </Section>
  );
};

export default Examples;
