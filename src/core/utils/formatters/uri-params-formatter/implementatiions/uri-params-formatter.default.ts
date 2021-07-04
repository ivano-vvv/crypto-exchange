import {injectable} from 'inversify';
import {URIParamsFormatter} from '../uri-params-formatter.model';

@injectable()
export class DefaultURIParamsFormatter implements URIParamsFormatter {
    do(params: Dictionary<primitive>): string {
        const preformattedParams = this.preformatParams(params);
        return new URLSearchParams(preformattedParams).toString();
    }

    private preformatParams(params: Dictionary<primitive>): Dictionary<string> {
        const result: Dictionary<string> = {};

        Object.entries(params).forEach(p => {
            const key = encodeURIComponent(p[0]);
            const value = encodeURIComponent(p[1]);

            result[key] = value;
        });

        return result;
    }
}
