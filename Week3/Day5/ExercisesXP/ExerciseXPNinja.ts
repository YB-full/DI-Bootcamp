type MappedType<TInput extends string|number, TOutput extends number> = TInput extends number
  ? (TOutput extends number ? number : never): MappedType<TInput,TOutput>;

function mapType<input extends string|number,output extends number>(
    value: MappedType<input, output>): MappedType<input, output> {
        if (typeof value.input ==="number"){
            return value.input * value.input;
        }
}  