import { FC, useEffect, useState } from "react";
import PlayComponent from "./Play.component";
import { ITest } from "../../../../globalTypes";
import _ from "lodash";
import { findPercentage } from "../../../../utils/utils";

interface ComponentProps {
  currentTest: ITest | null;
  turnToReadMode: any;
  setNewStatistic: (testId: string, stat: number) => void;
}

const PlayPage: FC<ComponentProps> = (props) => {
  const { currentTest, turnToReadMode, setNewStatistic } = props;

  const words = currentTest?.words;

  const [testWordsIndexes, setTestWordIndexes] = useState<any[]>([]);
  const [currentDisplayedWord, setCurrentDisplayedWord] = useState<any>("");

  const [trulyTrans, setTrulyTrans] = useState<any>([]);
  const [trulyTransIndexes, setTrulyTransIndexes] = useState<any[]>([]);

  const [allTranslationsToDisplay, setAllTranslationsToDisplay] = useState<any[]>([]);

  const [testStatistic, setTestStatistic] = useState<number>(0);

  const [step, setStep] = useState<number>(1);

  const { wordEng } = currentDisplayedWord;

  const toRandomTestWords = (words: any[]) => {
    const indexes: any[] = [];
    words.forEach((_, index) => indexes.push(index));
    const randomIndexes = _.sampleSize(indexes, indexes.length);

    setTestWordIndexes(randomIndexes);
  };

  const toNextStep = () => {
    if (words && words?.length > 0) {
      if (step === words?.length) {
        return;
      }
      setTestWordIndexes(testWordsIndexes.filter((_, index) => index !== 0));
      setStep(step + 1);
    }
  };

  const onTransClick = (translation: string) => {
    if (trulyTrans.includes(translation)) {
      setTestStatistic((testStatistic + 1));
    } 

    toNextStep();
  };

  useEffect(() => {
    if (words != null && words.length > 0) {
      toRandomTestWords(words);
    }
  }, []);
  


  useEffect(() => {
    if (testWordsIndexes.length > 0 && words && words.length > 0) {
      const indexOfCurrentWord = testWordsIndexes[0];
      const currentWord = words[indexOfCurrentWord];
      const ArrayOfTranslations = currentWord.wordTr.split(", ");
      const indexes: any[] = [];

      ArrayOfTranslations.forEach((_: any, index: any) => indexes.push(index));

      setCurrentDisplayedWord(currentWord);
      setTrulyTrans(ArrayOfTranslations);
      setTrulyTransIndexes(_.sampleSize(indexes, indexes.length));
    }
  }, [testWordsIndexes]);

  useEffect(() => {
    if (words != null && words.length > 0 && currentDisplayedWord != null) {
      const allTranslations: any[] = [];

      words.forEach((word) => {
        if (word.id != null && word.id !== currentDisplayedWord.id) {
          const oneWordTranslations = word.wordTr.split(", ");

          allTranslations.push(..._.sampleSize(oneWordTranslations, 1));
        }
      });

      const treeFakeTranslations = allTranslations.splice(0, 3);
      const allTranslationsNeedDisplay = [
        ...treeFakeTranslations,
        trulyTrans[trulyTransIndexes[0]]
      ];

      setAllTranslationsToDisplay(
        _.sampleSize(
          allTranslationsNeedDisplay,
          allTranslationsNeedDisplay.length
        )
      );
    }
  }, [words, currentDisplayedWord]);

  useEffect(() => {
    if (step === words?.length && currentTest != null) {
      const per = findPercentage(words.length, testStatistic);
      setNewStatistic(currentTest?.id, per);
      turnToReadMode();
    }

  }, [step, testStatistic])

  return (
    <PlayComponent
      {...{
        wordEng,
        allTranslationsToDisplay,
        turnToReadMode,
        onTransClick
      }}
    />
  );
};

export default PlayPage;
