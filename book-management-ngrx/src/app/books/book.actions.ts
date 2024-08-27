import { createAction, props } from '@ngrx/store';
import { Book } from '../models/book';

export const AddBook = createAction('[Book] Add Book', props<Book>());
export const AddBookSuccess = createAction('[Book] Add Book Successfully', props<Book>());
export const AddBookFailure = createAction('[Book] Add Book Failed', props<{error: any}>());

export const RemoveBook = createAction('[Book] Remove Book', props<{bookId: string}>());
//To do: add actions to remove book success and failure