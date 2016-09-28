SELECT * FROM photos INNER JOIN clusters ON (photos.cluster_id = clusters.id);



SELECT photos.id, photos.cluster_id, photos.comments, photos.expanded, photos.pixid, photos.image_height, photos.image_width, photos.pageurl, photos.preview_height, photos.previewurl, photos.preview_width, photos.saved, photos.tags, photos.webformat_height, photos.webformaturl, photos.webformat_width, clusters.id, clusters.user_id, clusters.name FROM photos INNER JOIN clusters ON (photos.cluster_id = clusters.id);



knex('photos')
  .select(
    'photos.id',
    'photos.cluster_id',
    'photos.comments',
    'photos.expanded',
    'photos.pixid',
    'photos.image_height',
    'photos.image_width, photos.pageurl',
    'photos.preview_height',
    'photos.previewurl',
    'photos.preview_width',
    'photos.saved',
    'photos.tags',
    'photos.webformat_height',
    'photos.webformaturl',
    'photos.webformat_width',
    'clusters.id',
    'clusters.user_id'
    )
    .where('')
