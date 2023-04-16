export interface Promociones {
    items:   Item[];
    hasMore: boolean;
    limit:   number;
    offset:  number;
    count:   number;
    links:   Link[];
}

export interface Item {
    id:          number;
    nombre:      string;
    descripcion: string;
    banner:      string;
    vigencia:    Date;
    status:      number;
    bases:       null | string;
}

export interface Link {
    rel:  string;
    href: string;
}
