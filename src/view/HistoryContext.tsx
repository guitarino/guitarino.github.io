import { createContext } from "preact";
import { History } from 'history';

export const HistoryContext = createContext<History>(null as any);