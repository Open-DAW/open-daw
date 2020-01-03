export default function HotkeyHandler(name?: string) {
    return function (
        target: any,
        propertyName: string,
        propertyDesciptor: PropertyDescriptor
    ): PropertyDescriptor {
        console.log('target', target);
        console.log('propertyName', propertyName);
        console.log('name', name);
        target.handlers[name || propertyName] = propertyName.valueOf.bind(target);
        return propertyDesciptor;
    };
}