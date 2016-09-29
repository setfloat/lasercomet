SELECT * FROM photos INNER JOIN clusters ON (photos.cluster_id = clusters.id);



SELECT photos.id, photos.cluster_id, photos.comments, photos.expanded, photos.pixid, photos.image_height, photos.image_width, photos.pageurl, photos.preview_height, photos.previewurl, photos.preview_width, photos.saved, photos.tags, photos.webformat_height, photos.webformaturl, photos.webformat_width, clusters.id, clusters.user_id, clusters.name FROM photos INNER JOIN clusters ON (photos.cluster_id = clusters.id);



// ensure cluster id is created. if nothing insert new one? and use that id.
// or have the cluster_id created on register.


knex (clusters)
  .where(
    'users.id' === cluster.user_id
  .first()
  // when expanding for multiple clusters, would have to pass in cluster_id in.
  // route to get all cluster id's for a given user. future me problem.
  // another route, where parameters is cluster_id
  //would return the cluster_id





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
