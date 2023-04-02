interface Props {
  components: Array<React.JSXElementConstructor<React.PropsWithChildren>>;
  children: React.ReactNode;
}

export default function Compose(props: Props) {
  const { components = [], children } = props;

  return (
    <>
      {components.reduceRight((acc, Comp) => {
        return <Comp>{acc}</Comp>;
      }, children)}
    </>
  );
}
