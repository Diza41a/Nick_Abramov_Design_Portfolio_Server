import { Model } from 'mongoose';

type OrderedDocument = {
  order: number;
  [key: string]: any;
};
export const reorderDocument = async (
  documentId: string,
  newOrder: number,
  model: Model<OrderedDocument>,
): Promise<any> => {
  const document = await model.findById(documentId);
  const oldOrder = document.order;

  if (oldOrder === newOrder) return;

  const newOrderIsLessFilter = {
    order: { $gte: newOrder, $lt: oldOrder },
  };
  const newOrderIsMoreFilter = {
    order: { $gt: oldOrder, $lte: newOrder },
  };

  const incrementAmount = newOrder < oldOrder ? 1 : -1;
  const update = { $inc: { order: incrementAmount } };
  const filter = {
    $and: [
      { order: { $ne: oldOrder } },
      newOrder < oldOrder ? newOrderIsLessFilter : newOrderIsMoreFilter,
    ],
  };
  await model.updateMany(filter, update);

  const reorderedDocument = await model.findByIdAndUpdate(
    documentId,
    { order: newOrder },
    { new: true },
  );

  return reorderedDocument;
};
