import { createAction } from '@reduxjs/toolkit';

export const cityChange = createAction<string>('сityChange');

export const listFilling = createAction('listFilling');

export const sortingSelection = createAction<string>('sorting/selectOptionSorting');

export const colorSelectPoint = createAction<string | null>('points/selectPoint');