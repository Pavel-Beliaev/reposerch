import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { FetchDataCard, FetchParamsCardType } from './types';

export const fetchCard = createAsyncThunk<FetchDataCard, FetchParamsCardType>(
  'card/fetchCard',
  async params => {
    const { owner, repo } = params;
    const { data } = await axios.get<FetchDataCard>(
      `https://api.github.com/repos/${owner}/${repo}`,
    );
    return data;
  },
);