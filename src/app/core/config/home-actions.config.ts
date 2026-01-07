export interface HomeAction {
  id: string;
  route: string;
  titleKey: string;
  descKey: string;
}

export const HOME_ACTIONS: HomeAction[] = [
  {
    id: 'problem',
    route: '/situations',
    titleKey: 'UI_HOME_ACTION_PROBLEM_TITLE',
    descKey: 'UI_HOME_ACTION_PROBLEM_DESC'
  },
  {
    id: 'learn',
    route: '/acts',
    titleKey: 'UI_HOME_ACTION_LEARN_TITLE',
    descKey: 'UI_HOME_ACTION_LEARN_DESC'
  },
  {
    id: 'quiz',
    route: '/quiz/start/341',
    titleKey: 'UI_HOME_ACTION_QUIZ_TITLE',
    descKey: 'UI_HOME_ACTION_QUIZ_DESC'
  }
];
