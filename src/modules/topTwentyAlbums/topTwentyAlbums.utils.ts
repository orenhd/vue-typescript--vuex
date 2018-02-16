import * as dataModels from './topTwentyAlbums.dataModels';

import * as viewModels from './topTwentyAlbums.viewModels';

export function mapToListAlbumEntries(albumEntries: dataModels.ITunesAlbumEntry[]): viewModels.ListAlbumEntry[] {
    return albumEntries.map((albumEntry: dataModels.ITunesAlbumEntry) => {
        return {
            id: albumEntry.id.label,
            title: albumEntry['im:name'].label,
            artist: albumEntry['im:artist'].label,
            copyright: albumEntry['rights'].label,
            thumbnail: (<any> albumEntry['im:image'][0]).label
        }
    });
} 