import { ViteDevServer, Plugin } from 'vite';
import { IncomingMessage, ServerResponse } from 'http';

interface Request extends IncomingMessage {
    viteServer?: ViteDevServer;
    /**
     * The originally-requested URL, including parent router segments.
     */
    originalUrl: string;
    /**
     * The path portion of the requested URL.
     */
    path: string;
    /**
     * The values of named parameters within your route pattern
     */
    params: {
        [key: string]: string;
    };
    /**
     * The un-parsed querystring
     */
    search: string | null;
    /**
     * The parsed querystring
     */
    query: {
        [key: string]: string | string[];
    };
}
declare type Response = ServerResponse;
declare type NextFunction = (err?: Error) => void;
declare type Handler = (req: Request, res: Response, next: NextFunction) => any;
declare type BuildOpts = {
    root: string;
    serverOutDir: string;
    clientOutDir: string;
};
declare type Adapter = {
    name: string;
    rollupInput?: Record<string, string | string[]>;
    buildStart?: (opts: BuildOpts) => Promise<void> | void;
    buildEnd?: (opts: BuildOpts) => Promise<void> | void;
};

declare const nodeAdapter: () => Adapter;

declare const vercelAdapter: () => Adapter;

declare const _default: ({ handler, adapter, }: {
    handler: string;
    adapter?: Adapter | undefined;
}) => Plugin;

export { Adapter, Handler, NextFunction, Request, Response, _default as default, nodeAdapter, vercelAdapter };
