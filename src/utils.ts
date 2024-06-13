export const reorderDocument = async (
  documentId: string,
  newOrder: number,
  model: any,
): Promise<any> => {
  const document = await model.findById(documentId);
  const oldOrder = document.order;

  if (oldOrder === newOrder) {
    return;
  }

  const incAmount = newOrder < oldOrder ? 1 : -1;

  const newOrderIsLessFilter = {
    order: { $gte: newOrder, $lt: oldOrder },
  };
  const newOrderIsMoreFilter = {
    order: { $gt: oldOrder, $lte: newOrder },
  };
  const filter = {
    $and: [
      { order: { $ne: oldOrder } },
      newOrder < oldOrder ? newOrderIsLessFilter : newOrderIsMoreFilter,
    ],
  };

  const update = { $inc: { order: incAmount } };

  await model.updateMany(filter, update);
  const reorderedDocument = await model.findByIdAndUpdate(
    documentId,
    { order: newOrder },
    { new: true },
  );

  return reorderedDocument;
};
