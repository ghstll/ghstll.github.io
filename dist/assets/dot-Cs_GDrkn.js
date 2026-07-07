var e=e=>{switch(e){case`index`:return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=index,
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        label="\\N",
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#8D8D8D",
        fontcolor="#C9C9C9",
        fontname=Arial,
        fontsize=14,
        penwidth=2,
        style=""
    ];
    customer [height=2.5,
        label=<<FONT POINT-SIZE="20">customer</FONT>>,
        likec4_id=customer,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    sys [height=2.5,
        label=<<FONT POINT-SIZE="20">sys</FONT>>,
        likec4_id=sys,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    customer -> sys [arrowhead=normal,
        likec4_id=m72fo7,
        minlen=1,
        style=dashed];
    admin [height=2.5,
        label=<<FONT POINT-SIZE="20">admin</FONT>>,
        likec4_id=admin,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    admin -> sys [arrowhead=normal,
        likec4_id="1lg33do",
        minlen=1,
        style=dashed];
    payment_service [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">payment_service</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#bfdbfe">Stripe</FONT></TD></TR></TABLE>>,
        likec4_id=payment_service,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    email_service [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">email_service</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#bfdbfe">Amazon SES</FONT></TD></TR></TABLE>>,
        likec4_id=email_service,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    payment_service -> email_service [style=invis];
}
`;case`view_1ldkqb`:return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=view_1ldkqb,
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        label="\\N",
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#8D8D8D",
        fontcolor="#C9C9C9",
        fontname=Arial,
        fontsize=14,
        penwidth=2,
        style=""
    ];
    subgraph cluster_sys {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>SYS</B></FONT>>,
            likec4_depth=1,
            likec4_id=sys,
            likec4_level=0,
            margin=40,
            style=filled
        ];
        frontend [group=sys,
            height=2.5,
            label=<<FONT POINT-SIZE="20">frontend</FONT>>,
            likec4_id="sys.frontend",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        admin_panel [height=2.5,
            label=<<FONT POINT-SIZE="20">admin_panel</FONT>>,
            likec4_id="sys.admin_panel",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        api_backend [group=sys,
            height=2.5,
            label=<<FONT POINT-SIZE="20">api_backend</FONT>>,
            likec4_id="sys.api_backend",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        postgres_db [group=sys,
            height=2.5,
            label=<<FONT POINT-SIZE="20">postgres_db</FONT>>,
            likec4_id="sys.postgres_db",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    customer [height=2.5,
        label=<<FONT POINT-SIZE="20">customer</FONT>>,
        likec4_id=customer,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    customer -> frontend [arrowhead=normal,
        likec4_id=cvwws7,
        minlen=1,
        style=dashed];
    admin [height=2.5,
        label=<<FONT POINT-SIZE="20">admin</FONT>>,
        likec4_id=admin,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    admin -> admin_panel [arrowhead=normal,
        likec4_id=ohcjlg,
        style=dashed,
        weight=2];
    frontend -> api_backend [arrowhead=normal,
        likec4_id="1xmfl3",
        style=dashed,
        weight=2];
    api_backend -> postgres_db [arrowhead=normal,
        likec4_id="11ac3hn",
        minlen=1,
        style=dashed];
}
`;case`components`:return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=components,
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        label="\\N",
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#8D8D8D",
        fontcolor="#C9C9C9",
        fontname=Arial,
        fontsize=14,
        penwidth=2,
        style=""
    ];
    subgraph cluster_api_backend {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>API_BACKEND</B></FONT>>,
            likec4_depth=1,
            likec4_id="sys.api_backend",
            likec4_level=0,
            margin=40,
            style=filled
        ];
        {
            graph [rank=same];
            auth [height=2.5,
                label=<<FONT POINT-SIZE="20">auth</FONT>>,
                likec4_id="sys.api_backend.auth",
                likec4_level=1,
                margin="0.223,0.223",
                width=4.445];
            catalog [height=2.5,
                label=<<FONT POINT-SIZE="20">catalog</FONT>>,
                likec4_id="sys.api_backend.catalog",
                likec4_level=1,
                margin="0.223,0.223",
                width=4.445];
        }
        {
            graph [rank=same];
            orders [height=2.5,
                label=<<FONT POINT-SIZE="20">orders</FONT>>,
                likec4_id="sys.api_backend.orders",
                likec4_level=1,
                margin="0.223,0.223",
                width=4.445];
            notifications [height=2.5,
                label=<<FONT POINT-SIZE="20">notifications</FONT>>,
                likec4_id="sys.api_backend.notifications",
                likec4_level=1,
                margin="0.223,0.223",
                width=4.445];
        }
        auth -> orders [minlen=1,
            style=invis];
    }
    frontend [height=2.5,
        label=<<FONT POINT-SIZE="20">frontend</FONT>>,
        likec4_id="sys.frontend",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    frontend -> auth [arrowhead=normal,
        lhead=cluster_api_backend,
        likec4_id="1xmfl3",
        minlen=1,
        style=dashed];
    admin_panel [height=2.5,
        label=<<FONT POINT-SIZE="20">admin_panel</FONT>>,
        likec4_id="sys.admin_panel",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    admin_panel -> catalog [style=invis];
    catalog -> notifications [style=invis];
}
`;default:throw Error(`Unknown viewId: `+e)}},t=e=>{switch(e){case`index`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.5 (0)
 -->
<!-- Pages: 1 -->
<svg width="1210pt" height="510pt"
 viewBox="0.00 0.00 1210.00 510.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 495.05)">
<!-- customer -->
<g id="node1" class="node">
<title>customer</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="320.04,-480 0,-480 0,-300 320.04,-300 320.04,-480"/>
<text xml:space="preserve" text-anchor="start" x="118.9" y="-382" font-family="Arial" font-size="20.00" fill="#eff6ff">customer</text>
</g>
<!-- sys -->
<g id="node2" class="node">
<title>sys</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="535.04,-180 215,-180 215,0 535.04,0 535.04,-180"/>
<text xml:space="preserve" text-anchor="start" x="360.02" y="-82" font-family="Arial" font-size="20.00" fill="#eff6ff">sys</text>
</g>
<!-- admin -->
<g id="node3" class="node">
<title>admin</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="750.04,-480 430,-480 430,-300 750.04,-300 750.04,-480"/>
<text xml:space="preserve" text-anchor="start" x="562.78" y="-382" font-family="Arial" font-size="20.00" fill="#eff6ff">admin</text>
</g>
<!-- payment_service -->
<g id="node4" class="node">
<title>payment_service</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1180.04,-480 860,-480 860,-300 1180.04,-300 1180.04,-480"/>
<text xml:space="preserve" text-anchor="start" x="944.43" y="-391.8" font-family="Arial" font-size="20.00" fill="#eff6ff">payment_service</text>
<text xml:space="preserve" text-anchor="start" x="1003.04" y="-370.8" font-family="Arial" font-size="13.00" fill="#bfdbfe">Stripe</text>
</g>
<!-- email_service -->
<g id="node5" class="node">
<title>email_service</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1180.04,-180 860,-180 860,0 1180.04,0 1180.04,-180"/>
<text xml:space="preserve" text-anchor="start" x="958.89" y="-91.8" font-family="Arial" font-size="20.00" fill="#eff6ff">email_service</text>
<text xml:space="preserve" text-anchor="start" x="981.36" y="-70.8" font-family="Arial" font-size="13.00" fill="#bfdbfe">Amazon SES</text>
</g>
<!-- customer&#45;&gt;sys -->
<g id="edge1" class="edge">
<title>customer&#45;&gt;sys</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M223.94,-300.4C249.49,-264.99 278.99,-224.1 305.11,-187.9"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="306.94,-189.85 309.2,-182.23 302.68,-186.78 306.94,-189.85"/>
</g>
<!-- admin&#45;&gt;sys -->
<g id="edge2" class="edge">
<title>admin&#45;&gt;sys</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M526.1,-300.4C500.55,-264.99 471.05,-224.1 444.93,-187.9"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="447.36,-186.78 440.84,-182.23 443.1,-189.85 447.36,-186.78"/>
</g>
<!-- payment_service&#45;&gt;email_service -->
</g>
</svg>
`;case`view_1ldkqb`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.5 (0)
 -->
<!-- Pages: 1 -->
<svg width="876pt" height="1158pt"
 viewBox="0.00 0.00 876.00 1158.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 1143.05)">
<g id="clust1" class="cluster">
<title>cluster_sys</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-8 8,-889.2 838,-889.2 838,-8 8,-8"/>
<text xml:space="preserve" text-anchor="start" x="16" y="-876.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">SYS</text>
</g>
<!-- frontend -->
<g id="node1" class="node">
<title>frontend</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="368.02,-828 47.98,-828 47.98,-648 368.02,-648 368.02,-828"/>
<text xml:space="preserve" text-anchor="start" x="171.31" y="-730" font-family="Arial" font-size="20.00" fill="#eff6ff">frontend</text>
</g>
<!-- admin_panel -->
<g id="node2" class="node">
<title>admin_panel</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="798.02,-828 477.98,-828 477.98,-648 798.02,-648 798.02,-828"/>
<text xml:space="preserve" text-anchor="start" x="580.73" y="-730" font-family="Arial" font-size="20.00" fill="#eff6ff">admin_panel</text>
</g>
<!-- api_backend -->
<g id="node3" class="node">
<title>api_backend</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="368.02,-528 47.98,-528 47.98,-348 368.02,-348 368.02,-528"/>
<text xml:space="preserve" text-anchor="start" x="151.29" y="-430" font-family="Arial" font-size="20.00" fill="#eff6ff">api_backend</text>
</g>
<!-- postgres_db -->
<g id="node4" class="node">
<title>postgres_db</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="368.02,-228 47.98,-228 47.98,-48 368.02,-48 368.02,-228"/>
<text xml:space="preserve" text-anchor="start" x="152.96" y="-130" font-family="Arial" font-size="20.00" fill="#eff6ff">postgres_db</text>
</g>
<!-- customer -->
<g id="node5" class="node">
<title>customer</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="368.02,-1128 47.98,-1128 47.98,-948 368.02,-948 368.02,-1128"/>
<text xml:space="preserve" text-anchor="start" x="166.88" y="-1030" font-family="Arial" font-size="20.00" fill="#eff6ff">customer</text>
</g>
<!-- admin -->
<g id="node6" class="node">
<title>admin</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="798.02,-1128 477.98,-1128 477.98,-948 798.02,-948 798.02,-1128"/>
<text xml:space="preserve" text-anchor="start" x="610.76" y="-1030" font-family="Arial" font-size="20.00" fill="#eff6ff">admin</text>
</g>
<!-- frontend&#45;&gt;api_backend -->
<g id="edge3" class="edge">
<title>frontend&#45;&gt;api_backend</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M208,-648.4C208,-613.73 208,-573.81 208,-538.19"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="210.63,-538.3 208,-530.8 205.38,-538.3 210.63,-538.3"/>
</g>
<!-- api_backend&#45;&gt;postgres_db -->
<g id="edge4" class="edge">
<title>api_backend&#45;&gt;postgres_db</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M208,-348.4C208,-313.73 208,-273.81 208,-238.19"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="210.63,-238.3 208,-230.8 205.38,-238.3 210.63,-238.3"/>
</g>
<!-- customer&#45;&gt;frontend -->
<g id="edge1" class="edge">
<title>customer&#45;&gt;frontend</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M208,-948.4C208,-913.73 208,-873.81 208,-838.19"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="210.63,-838.3 208,-830.8 205.38,-838.3 210.63,-838.3"/>
</g>
<!-- admin&#45;&gt;admin_panel -->
<g id="edge2" class="edge">
<title>admin&#45;&gt;admin_panel</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M638,-948.4C638,-913.73 638,-873.81 638,-838.19"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="640.63,-838.3 638,-830.8 635.38,-838.3 640.63,-838.3"/>
</g>
</g>
</svg>
`;case`components`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.5 (0)
 -->
<!-- Pages: 1 -->
<svg width="876pt" height="858pt"
 viewBox="0.00 0.00 876.00 858.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 843.05)">
<g id="clust1" class="cluster">
<title>cluster_api_backend</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-8 8,-589.2 838,-589.2 838,-8 8,-8"/>
<text xml:space="preserve" text-anchor="start" x="16" y="-576.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">API_BACKEND</text>
</g>
<!-- auth -->
<g id="node1" class="node">
<title>auth</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="368.02,-528 47.98,-528 47.98,-348 368.02,-348 368.02,-528"/>
<text xml:space="preserve" text-anchor="start" x="188.54" y="-430" font-family="Arial" font-size="20.00" fill="#eff6ff">auth</text>
</g>
<!-- catalog -->
<g id="node2" class="node">
<title>catalog</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="798.02,-528 477.98,-528 477.98,-348 798.02,-348 798.02,-528"/>
<text xml:space="preserve" text-anchor="start" x="605.75" y="-430" font-family="Arial" font-size="20.00" fill="#eff6ff">catalog</text>
</g>
<!-- orders -->
<g id="node3" class="node">
<title>orders</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="368.02,-228 47.98,-228 47.98,-48 368.02,-48 368.02,-228"/>
<text xml:space="preserve" text-anchor="start" x="179.66" y="-130" font-family="Arial" font-size="20.00" fill="#eff6ff">orders</text>
</g>
<!-- notifications -->
<g id="node4" class="node">
<title>notifications</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="798.02,-228 477.98,-228 477.98,-48 798.02,-48 798.02,-228"/>
<text xml:space="preserve" text-anchor="start" x="585.19" y="-130" font-family="Arial" font-size="20.00" fill="#eff6ff">notifications</text>
</g>
<!-- frontend -->
<g id="node5" class="node">
<title>frontend</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="368.02,-828 47.98,-828 47.98,-648 368.02,-648 368.02,-828"/>
<text xml:space="preserve" text-anchor="start" x="171.31" y="-730" font-family="Arial" font-size="20.00" fill="#eff6ff">frontend</text>
</g>
<!-- admin_panel -->
<g id="node6" class="node">
<title>admin_panel</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="798.02,-828 477.98,-828 477.98,-648 798.02,-648 798.02,-828"/>
<text xml:space="preserve" text-anchor="start" x="580.73" y="-730" font-family="Arial" font-size="20.00" fill="#eff6ff">admin_panel</text>
</g>
<!-- auth&#45;&gt;orders -->
<!-- catalog&#45;&gt;notifications -->
<!-- frontend&#45;&gt;auth -->
<g id="edge2" class="edge">
<title>frontend&#45;&gt;auth</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M208,-648.4C208,-632.91 208,-616.37 208,-599.64"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="210.63,-599.73 208,-592.23 205.38,-599.73 210.63,-599.73"/>
</g>
<!-- admin_panel&#45;&gt;catalog -->
</g>
</svg>
`;default:throw Error(`Unknown viewId: `+e)}};export{e as dotSource,t as svgSource};