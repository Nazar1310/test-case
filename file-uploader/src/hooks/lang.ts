import { useContext } from 'react';
import LangContext from '../contexts/LangContext';
import type { LangContextValue } from '../contexts/LangContext';

export const useLang = (): LangContextValue => useContext(LangContext);
