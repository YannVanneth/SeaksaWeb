export function ScriptCopyBtn() {
  const customCommandMap = {};
  return (
    <ScriptCopyBtn
      showMultiplePackageOptions={true}
      codeLanguage="shell"
      lightTheme="nord"
      darkTheme="vitesse-dark"
      commandMap={customCommandMap}
    />
  );
}
