import type { DocCollection } from '@blocksuite/store';

export const createDoc = (collection: DocCollection, id: string) => {
    const doc = collection.createDoc({ id });
    doc.load(() => {
        const pageBlockId = doc.addBlock('affine:page', {});
        doc.addBlock('affine:surface', {}, pageBlockId);
        const noteId = doc.addBlock('affine:note', {}, pageBlockId);
        doc.addBlock('affine:paragraph', {}, noteId);
    });
    return doc;
};
