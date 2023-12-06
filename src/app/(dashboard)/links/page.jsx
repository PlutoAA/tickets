'use client'
import StyledInput from "@/components/elements/inputs/StyledInput";
import Checkbox from "@/components/elements/checkBox/Checkbox";
import styles from "./page.module.scss";
import "react-toggle/style.css"
import Toggle from 'react-toggle';
import { linkCheckboxes } from '@/utils/linkCheckboxes';
import { setLink } from '@/context/link';
import { useStore } from 'effector-react';
import { $link } from '@/context/link'
import { $inputs, setInput } from '@/context/inputs';

export default function Links() {
  const link = useStore($link)
  const inputs = useStore($inputs)

  // const { shouldLoadContent } = useRedirectByUserCheck()
  const shouldLoadContent = true

  const defaultUrl= `https://example.com`

  const handleOnChange = (position) => {

    const updatedCheckedState = inputs.map((item, index) =>
      index === position ? !item : item
    );

    setInput(updatedCheckedState);

    const readyLink = updatedCheckedState.reduce(
      (sum, currentState, index) => {
        if (currentState === true) {
          return sum + linkCheckboxes[index].link;
        }
        return sum;
      },
      defaultUrl
    );
    setLink(readyLink)
  };

  return (
    <main className={styles.wrapper}>
      {shouldLoadContent && (
        <div className={styles.container}>
        <div className={styles.settings__block}>
          <div>
            <StyledInput label="event id" type="text" />
            <StyledInput label="code" type="text" />
            <StyledInput label="ga section" type="text" />
            <div className={styles.priority}>
              <StyledInput label="priority" type="text" />
              <Toggle
                defaultChecked={false}
                icons={false}
              />
            </div>
          </div>
          <div>
            <StyledInput label="sections" />
            <StyledInput label="skip" />
          </div>
          <div>
            <StyledInput label="min qty" type="number" defaultValue="0" />
            <StyledInput label="max qty" type="number" defaultValue="0" />
            <StyledInput label="min price" type="number" defaultValue="0" />
            <StyledInput label="max price" type="number" defaultValue="0" />
          </div>
          <div>
            {linkCheckboxes.map(({ name }, index) => {
              return (
                <Checkbox
                  key={index}
                  label={name}
                  value={inputs[index]}
                  onChange={() => handleOnChange(index)}
                />
              );
            })}
          </div>
          <div>
            <button className={styles.linkBtn}>Remove</button>
            <button className={styles.linkBtn}>Save</button>
            <button className={styles.linkBtn}>Add</button>
          </div>
        </div>
        <div className={styles.url__block}>
          <StyledInput label="URL" type="text" value={link} readOnly />
          <button onClick={() => {navigator.clipboard.writeText(link)}} className={styles.linkBtn}>Copy url</button>
        </div>
      </div>
      )}
    </main>
  );
}
