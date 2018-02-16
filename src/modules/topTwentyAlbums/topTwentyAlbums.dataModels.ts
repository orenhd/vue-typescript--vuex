export interface ITunesAlbumEntry {
    'category': ITunesAlbumEntryProperty;
    'id': ITunesAlbumEntryProperty;
    'im:artist': ITunesAlbumEntryProperty;
    'im:contentType': ITunesAlbumEntryProperty;
    'im:image': ITunesAlbumEntryProperty[];
    'im:itemCount': ITunesAlbumEntryProperty;
    'im:name': ITunesAlbumEntryProperty;
    'im:price': ITunesAlbumEntryProperty;
    'im:releaseDate': ITunesAlbumEntryProperty;
    'link': ITunesAlbumEntryProperty;
    'rights': ITunesAlbumEntryProperty;
    'title': ITunesAlbumEntryProperty;
}

export interface ITunesAlbumEntryProperty {
    attributes: Object;
    label: string;
}

export interface ITunesGenre {
    title: string;
    id: number;
}