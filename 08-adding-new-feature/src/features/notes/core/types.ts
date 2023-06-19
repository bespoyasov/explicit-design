export type Note = DraftNote | SavedNote;
export type NoteCollection = List<Note>;

export type DraftNote = { content: LocalizedString };
export type SavedNote = {
  content: LocalizedString;
  id: EntityId;
};
