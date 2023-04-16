export interface CuponByPromo {
    items:   Item[];
    hasMore: boolean;
    limit:   number;
    offset:  number;
    count:   number;
    links:   Link[];
}

export interface Item {
    id:             number;
    nombre:         string;
    codigo:         string;
    monto_desc:     number;
    fecha_creacion: Date;
    vigencia:       Date;
    status:         number;
    promocion:      number;
}

export interface Link {
    rel:  string;
    href: string;
}
