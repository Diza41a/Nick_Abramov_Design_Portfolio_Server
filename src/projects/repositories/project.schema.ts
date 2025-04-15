import * as mongoose from 'mongoose';

const {
  Schema,
  Schema: { ObjectId },
} = mongoose;

const ProjectMainImage = new Schema({
  path: { type: String, required: true },
  alt: String,
});

const ProjectContentCell = new Schema(
  {
    type: {
      type: String,
      enum: [
        'image link',
        'direct video link',
        'embedded video link',
        'markdown',
      ],
      required: true,
    },
    path: String,
    alt: String,
    body: String,
  },
  { _id: false },
);
ProjectContentCell.pre('validate', function (next) {
  const isMediaCell =
    this.type === 'image link' ||
    this.type === 'direct video link' ||
    this.type === 'embedded video link';
  const isMarkdownCell = this.type === 'markdown';

  if (isMediaCell && !this.path) {
    return next(new Error('Path is required for media cells'));
  }
  if (isMarkdownCell && !this.body) {
    return next(new Error('Body is required for markdown cells'));
  }

  return next();
});

const ProjectContentRow = new Schema({
  cellAmount: Number,
  cells: [ProjectContentCell],
});

export const ProjectSchema = new Schema(
  {
    id: ObjectId,
    order: Number,
    name: String,
    category: String,
    dateCreated: Number,
    description: String,
    mainImage: ProjectMainImage,
    isContentSpaced: Boolean,
    content: [ProjectContentRow],
  },
  { collection: 'projects' },
);
