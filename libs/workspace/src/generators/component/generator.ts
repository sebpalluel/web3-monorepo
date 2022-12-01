import { formatFiles, installPackagesTask, Tree, names } from '@nrwl/devkit';
import { componentStoryGenerator } from '@nrwl/react/src/generators/component-story/component-story';
import { componentGenerator as reactComponentGenerator } from '@nrwl/react/src/generators/component/component';
import { ComponentGeneratorSchema } from './schema';
import { toPascalCase } from '@utils';

export async function componentGenerator(
  tree: Tree,
  { name, project }: ComponentGeneratorSchema
) {
  const { fileName: componentFileName, className: componentName } = names(name);
  const componentPath = `lib/${componentFileName}/${toPascalCase(componentFileName)}.tsx`;

  await reactComponentGenerator(tree, {
    name: componentName,
    project,
    style: 'none',
    pascalCaseFiles: true,
  });

  await componentStoryGenerator(tree, { project, componentPath });

  await formatFiles(tree);

  return () => {
    installPackagesTask(tree);
  };
}

export default componentGenerator;
